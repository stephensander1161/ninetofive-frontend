import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { SubSkillService } from "src/app/services/sub-skill.service";
import { SubSkill } from "src/app/models/subSkill";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-sub-skill-add-delete-modal",
  templateUrl: "./sub-skill-add-delete-modal.page.html",
  styleUrls: ["./sub-skill-add-delete-modal.page.scss"],
})
export class SubSkillAddDeleteModalPage implements OnInit {
  allSubSkills: SubSkill[];

  registerSubSkill = {
    _id: null,
    name: "",
  };

  constructor(
    public modalController: ModalController,
    public subSkillService: SubSkillService
  ) {}

  ngOnInit() {
    this.getAllSubSkills();
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.subSkillService.selectedSubSkill = {
      _id: null,
      name: "",
    };
  }

  //crud functions
  refreshSubSkillList() {
    this.subSkillService.getAllSubSkills().subscribe((res) => {
      this.allSubSkills = res as SubSkill[];
    });
  }

  onEdit(subSkill: SubSkill) {
    this.registerSubSkill = subSkill;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      this.subSkillService.deleteSubSkill(_id).subscribe((res) => {
        this.refreshSubSkillList();
        this.resetForm(form);
      });
    }
  }

  createSubSkill(form: NgForm) {
    this.subSkillService.createSubSkill(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }

  getAllSubSkills() {
    this.subSkillService.getAllSubSkills().subscribe(
      (res) => {
        this.allSubSkills = res;
      },
      (err) => console.log(err)
    );
  }

  //modal functions
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
