import { GenericProfileModalPage } from "./../../modals/generic-profile-modal/generic-profile-modal.page";
import { GuaranteeService } from "./../../services/guarantee.service";
import { HowItWorksService } from "./../../services/how-it-works.service";
import { SeekerService } from "./../../services/seeker.service";
import { TestimonialService } from "./../../services/testimonial.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Testimonial } from "src/app/models/testimonial";
import { ModalController, PopoverController } from "@ionic/angular";
import { TestimonialProfileModalPage } from "src/app/modals/testimonial-profile-modal/testimonial-profile-modal.page";
import { HowItWork } from "src/app/models/howItWork";
import { NgForm } from "@angular/forms";
import { Guarantee } from "src/app/models/guarantee";
import { ThemeService } from "src/app/services/theme.service";
import { About } from "src/app/models/about";
import { AboutService } from "src/app/services/about.service";
import { FaqService } from "src/app/services/faq.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  //this is the generic slider transition
  // slideOptsOne = {
  //   initialSlide: 0,
  //   slidesPerView: 1,
  //   autoplay:true
  //  };
  admin: boolean = false;

  about: About = {
    id: null,
    content: "",
  };

  allAbouts: About[];

  moreAbout: string =
    "9ine to 5ive was co founded by two brothers in 2019 and has launched in Calgary, Alberta. With the inspiration to provide it's users with quality service at an affordable rate. Growing up in a separated family it was difficult for our mother to keep on top of the upkeep within the home. quite often then not when it came to larger repairs, we would hear that our Mom would be quoted charged an absurd amount for such a medial task. We thought to ourselves their must be a way to provide homeowners with the same quality of service at a fraction of the cost. With that 9ine to 5ive was born. Our mission is to deliver exactly what you want and just the way you want it. 9ine to 5ive is not only beneficial to homeowners it also serves as a launching site for individuals looking to start a small businesses by aiding them to grow their portfolios. 9ine to 5ive offers a range of services to choose from such as plumbing, carpentry, electrical, landscaping and other section if your task is not listed. You can then schedule your 9ine to 5iver to come at a later time or immediately. The best part is that the pricing is already premeditated so you'll know there'll be no surprises when the invoice arrives. 9ine to 5ive prides themselves in offering you the best experience possible. At the end of the day they're just people helping people.";

  slideOptsOne = {
    autoplay: true,
    loop: true,

    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(
          swiper.originalParams,
          overwriteParams
        );
      },
      setTranslate() {
        const swiper = this;
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex =
            -Math.abs(Math.round(progress)) + slides.length;

          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal()
              ? $slideEl.find(".swiper-slide-shadow-left")
              : $slideEl.find(".swiper-slide-shadow-top");
            let shadowAfter = swiper.isHorizontal()
              ? $slideEl.find(".swiper-slide-shadow-right")
              : $slideEl.find(".swiper-slide-shadow-bottom");
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(
                `<div class="swiper-slide-shadow-${
                  swiper.isHorizontal() ? "left" : "top"
                }"></div>`
              );
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(
                `<div class="swiper-slide-shadow-${
                  swiper.isHorizontal() ? "right" : "bottom"
                }"></div>`
              );
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length)
              shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length)
              shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          $slideEl.transform(
            `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          );
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
        slides
          .transition(duration)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;

            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ["webkitTransitionEnd", "transitionend"];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    },
  };
  allTestimonials: Testimonial[];

  allGuarantees: Guarantee[];

  allHowItWorks: HowItWork[];

  registerHiw = {
    _id: null,
    content: "",
  };

  registerGuarantee = {
    _id: null,
    content: "",
  };

  themes = {
    one: {
      primary: "#2e294e",
      secondary: "#387d7a",
      tertiary: "#fdfffc",
      success: "#1A936F",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    two: {
      primary: "#FCDE9C",
      secondary: "#E07A5F",
      tertiary: "#3D405B",
      success: "#81B29A",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    three: {
      primary: "#e07a5f",
      secondary: "#4CE0B3",
      tertiary: "#96C3CE",
      success: "#80CFA9",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    four: {
      primary: "#453750",
      secondary: "#a393bf",
      tertiary: "#9882AC",
      success: "#73648A",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    five: {
      primary: "#61988e",
      secondary: "#493843",
      tertiary: "#A0B2A6",
      success: "#CBBFBB",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#493843",
      light: "#f4f5f8",
    },
    six: {
      primary: "#39BFBD",
      secondary: "#EBBAB9",
      tertiary: "#C9C5BA",
      success: "#97B1A6",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    seven: {
      primary: "#39BFBD",
      secondary: "#FCDE9C",
      tertiary: "#FFA552",
      success: "#BA5624",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#381D2A",
      light: "#f4f5f8",
    },

    default: {
      primary: "#156535",
      secondary: "#f5f5f5",
      tertiary: "#effaf9",
      success: "#279156",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
  };

  constructor(
    private router: Router,
    private testimonialService: TestimonialService,
    public seekerService: SeekerService,
    public modalController: ModalController,
    public howItWorksService: HowItWorksService,
    public guaranteeService: GuaranteeService,
    public popoverController: PopoverController,
    private themeService: ThemeService,
    private aboutService: AboutService,
    private faqService: FaqService
  ) {}

  ngOnInit() {
    this.getAllTestimonials();
    this.getAllHowItWorks();
    this.getAllGuarantees();
    this.getAbout(1);
  }
  //themes
  oneTheme() {
    this.themeService.setTheme(this.themes.one);
  }

  twoTheme() {
    this.themeService.setTheme(this.themes.two);
  }

  threeTheme() {
    this.themeService.setTheme(this.themes.three);
  }
  fourTheme() {
    this.themeService.setTheme(this.themes.four);
  }

  fiveTheme() {
    this.themeService.setTheme(this.themes.five);
  }

  sixTheme() {
    this.themeService.setTheme(this.themes.six);
  }
  sevenTheme() {
    this.themeService.setTheme(this.themes.seven);
  }

  defaultTheme() {
    this.themeService.setTheme(this.themes.default);
  }
  //popovers
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: GenericProfileModalPage,
      cssClass: "my-custom-class",
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }

  async closePopover(ev: any) {
    await this.popoverController.dismiss();
  }

  //modals
  async genericProfileModal() {
    const modal = await this.modalController.create({
      component: TestimonialProfileModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  //crud functions

  getAbout(id: number) {
    this.aboutService.getAboutById(id).subscribe((data: About) => {
      this.about = data;
    });
  }

  getAllAbouts() {
    this.aboutService.getAllAbouts().subscribe((data: About[]) => {
      this.allAbouts = data;
    });
  }

  getAllTestimonials() {
    this.testimonialService.getAllTestimonials().subscribe(
      (res) => {
        this.allTestimonials = res;
      },
      (err) => console.log(err)
    );
  }

  getAllHowItWorks() {
    this.howItWorksService.getAllHowItWorks().subscribe(
      (res) => {
        this.allHowItWorks = res;
      },
      (err) => console.log(err)
    );
  }

  getAllGuarantees() {
    this.guaranteeService.getAllGuarantees().subscribe(
      (res) => {
        this.allGuarantees = res;
      },
      (err) => console.log(err)
    );
  }

  getInTouchClicked() {
    this.router.navigate(["/contact-us"]);
  }
  //header and footer functions

  arrowUpClicked() {
    this.admin = true;
  }

  arrowDownClicked() {
    this.admin = false;
  }

  buildClicked(): void {
    this.router.navigate(["/post-job"]);
  }

  faqClicked() {
    this.router.navigate(["/faq"]);
  }

  openTerms() {
    this.router.navigate(["/terms"]);
  }

  openFaq() {
    this.router.navigate(["/faq"]);
  }

  openContactUs() {
    this.router.navigate(["/contact-us"]);
  }

  openJob() {
    this.router.navigate(["/post-job"]);
  }
}
