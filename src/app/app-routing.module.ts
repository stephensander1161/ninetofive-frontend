import { AuthGuard } from "./guards/auth.guard";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full",
  },

  {
    path: "search-jobs",
    loadChildren: () =>
      import("./pages/search-jobs/search-jobs.module").then(
        (m) => m.SearchJobsPageModule
      ),
  },
  {
    path: "post-job",
    loadChildren: () =>
      import("./pages/post-job/post-job.module").then(
        (m) => m.PostJobPageModule
      ),
  },
  {
    path: "post-job/:id",
    loadChildren: () =>
      import("./pages/post-job/post-job.module").then(
        (m) => m.PostJobPageModule
      ),
  },
  {
    path: "gallery",
    loadChildren: () =>
      import("./pages/gallery/gallery.module").then((m) => m.GalleryPageModule),
  },

  {
    path: "testimonials",
    loadChildren: () =>
      import("./pages/testimonials/testimonials.module").then(
        (m) => m.TestimonialsPageModule
      ),
  },
  {
    path: "contact-us",
    loadChildren: () =>
      import("./pages/contact-us/contact-us.module").then(
        (m) => m.ContactUsPageModule
      ),
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then((m) => m.WelcomePageModule),
  },
  {
    path: "search-providers",
    loadChildren: () =>
      import("./pages/search-providers/search-providers.module").then(
        (m) => m.SearchProvidersPageModule
      ),
  },
  {
    path: "search-providers/:type",
    loadChildren: () =>
      import("./pages/search-providers/search-providers.module").then(
        (m) => m.SearchProvidersPageModule
      ),
  },
  {
    path: "pay",
    loadChildren: () =>
      import("./pages/pay/pay.module").then((m) => m.PayPageModule),
  },

  {
    path: "contact-provider",
    loadChildren: () =>
      import("./pages/contact-provider/contact-provider.module").then(
        (m) => m.ContactProviderPageModule
      ),
  },

  {
    path: "contact-provider/:id",
    loadChildren: () =>
      import("./pages/contact-provider/contact-provider.module").then(
        (m) => m.ContactProviderPageModule
      ),
  },

  {
    path: "terms",
    loadChildren: () =>
      import("./pages/terms/terms.module").then((m) => m.TermsPageModule),
  },
  {
    path: "faq",
    loadChildren: () =>
      import("./pages/faq/faq.module").then((m) => m.FaqPageModule),
  },
  {
    path: "progress",
    loadChildren: () =>
      import("./pages/progress/progress.module").then(
        (m) => m.ProgressPageModule
      ),
  },

  {
    path: "progress/:jobId",
    loadChildren: () =>
      import("./pages/progress/progress.module").then(
        (m) => m.ProgressPageModule
      ),
  },

  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "home/:email",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignupPageModule),
  },

  {
    path: "admin-home",
    loadChildren: () =>
      import("./pages/admin-home/admin-home.module").then(
        (m) => m.AdminHomePageModule
      ),
  },
  {
    path: "admin-stats",
    loadChildren: () =>
      import("./pages/admin-stats/admin-stats.module").then(
        (m) => m.AdminStatsPageModule
      ),
  },
  {
    path: "admin-users",
    loadChildren: () =>
      import("./pages/admin-users/admin-users.module").then(
        (m) => m.AdminUsersPageModule
      ),
  },
  {
    path: "admin-services",
    loadChildren: () =>
      import("./pages/admin-services/admin-services.module").then(
        (m) => m.AdminServicesPageModule
      ),
  },
  {
    path: "admin-payment",
    loadChildren: () =>
      import("./pages/admin-payment/admin-payment.module").then(
        (m) => m.AdminPaymentPageModule
      ),
  },
  {
    path: "admin-templates",
    loadChildren: () =>
      import("./pages/admin-templates/admin-templates.module").then(
        (m) => m.AdminTemplatesPageModule
      ),
  },
  {
    path: "admin-outreach",
    loadChildren: () =>
      import("./pages/admin-outreach/admin-outreach.module").then(
        (m) => m.AdminOutreachPageModule
      ),
  },
  {
    path: "seeker-new-modal",
    loadChildren: () =>
      import("./modals/seeker-new-modal/seeker-new-modal.module").then(
        (m) => m.SeekerNewModalPageModule
      ),
  },
  {
    path: "provider-new-modal",
    loadChildren: () =>
      import("./modals/provider-new-modal/provider-new-modal.module").then(
        (m) => m.ProviderNewModalPageModule
      ),
  },
  {
    path: "skill-add-delete-modal",
    loadChildren: () =>
      import(
        "./modals/skill-add-delete-modal/skill-add-delete-modal.module"
      ).then((m) => m.SkillAddDeleteModalPageModule),
  },
  {
    path: "sub-skill-add-delete-modal",
    loadChildren: () =>
      import(
        "./modals/sub-skill-add-delete-modal/sub-skill-add-delete-modal.module"
      ).then((m) => m.SubSkillAddDeleteModalPageModule),
  },
  {
    path: "job-new-modal",
    loadChildren: () =>
      import("./modals/job-new-modal/job-new-modal.module").then(
        (m) => m.JobNewModalPageModule
      ),
  },
  {
    path: "job-details-modal",
    loadChildren: () =>
      import("./modals/job-details-modal/job-details-modal.module").then(
        (m) => m.JobDetailsModalPageModule
      ),
  },
  {
    path: "job-details-modal/:_id",
    loadChildren: () =>
      import("./modals/job-details-modal/job-details-modal.module").then(
        (m) => m.JobDetailsModalPageModule
      ),
  },
  {
    path: "skill-report-modal",
    loadChildren: () =>
      import("./modals/skill-report-modal/skill-report-modal.module").then(
        (m) => m.SkillReportModalPageModule
      ),
  },
  {
    path: "review-new-modal",
    loadChildren: () =>
      import("./modals/review-new-modal/review-new-modal.module").then(
        (m) => m.ReviewNewModalPageModule
      ),
  },

  {
    path: "admin-profile-modal",
    loadChildren: () =>
      import("./modals/admin-profile-modal/admin-profile-modal.module").then(
        (m) => m.AdminProfileModalPageModule
      ),
  },
  {
    path: "provider-profile-modal",
    loadChildren: () =>
      import(
        "./modals/provider-profile-modal/provider-profile-modal.module"
      ).then((m) => m.ProviderProfileModalPageModule),
  },
  {
    path: "email-subs-modal",
    loadChildren: () =>
      import("./modals/email-subs-modal/email-subs-modal.module").then(
        (m) => m.EmailSubsModalPageModule
      ),
  },
  {
    path: "testimonial-profile-modal",
    loadChildren: () =>
      import(
        "./modals/testimonial-profile-modal/testimonial-profile-modal.module"
      ).then((m) => m.TestimonialProfileModalPageModule),
  },
  {
    path: "generic-profile-modal",
    loadChildren: () =>
      import(
        "./modals/generic-profile-modal/generic-profile-modal.module"
      ).then((m) => m.GenericProfileModalPageModule),
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
