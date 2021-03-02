import { Component, OnInit } from "@angular/core";
import { SkillService } from "src/app/services/skill.service";
import { Router } from "@angular/router";
import { Skill } from "src/app/models/skill";
import { ModalController } from "@ionic/angular";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-skill-add-delete-modal",
  templateUrl: "./skill-add-delete-modal.page.html",
  styleUrls: ["./skill-add-delete-modal.page.scss"],
})
export class SkillAddDeleteModalPage implements OnInit {
  allSkills: Skill[];

  registerSkill = {
    _id: null,
    name: "",
  };

  constructor(
    public modalController: ModalController,
    public skillService: SkillService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllSkills();
  }

  //modal functions
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  //form functions

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.skillService.selectedSkill = {
      _id: null,
      name: "",
    };
  }

  //crud functions
  refreshSkillList() {
    this.skillService.getAllSkills().subscribe((res) => {
      this.allSkills = res as Skill[];
    });
  }

  onEdit(skill: Skill) {
    this.registerSkill = skill;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      this.skillService.deleteSkill(_id).subscribe((res) => {
        this.refreshSkillList();
        this.resetForm(form);
      });
    }
  }

  createSkill(form: NgForm) {
    this.skillService.createSkill(form.value).subscribe((res) => {
      this.resetForm(form);
    });
  }

  getAllSkills() {
    this.skillService.getAllSkills().subscribe(
      (res) => {
        this.allSkills = res;
      },
      (err) => console.log(err)
    );
  }
}
