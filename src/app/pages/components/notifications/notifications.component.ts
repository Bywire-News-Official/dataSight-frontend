import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import swal from "sweetalert2";

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {
  dismissible = true;

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  notificationModal: BsModalRef;
  notification = {
    keyboard: true,
    class: "modal-dialog-centered modal-danger"
  };

  formModal: BsModalRef;
  form = {
    keyboard: true,
    class: "modal-dialog-centered modal-sm"
  };

  constructor(
    private modalService: BsModalService,
    public toastr: ToastrService
  ) {}

  showNotification(type) {
    const color = Math.floor(Math.random() * 5 + 1);
    if (type === "default") {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-default alert-notify"
        }
      );
    }
    if (type === "danger") {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-danger alert-notify"
        }
      );
    }
    if (type === "success") {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-success alert-notify"
        }
      );
    }
    if (type === "warning") {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-warning alert-notify"
        }
      );
    }
    if (type === "info") {
      this.toastr.show(
        '<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>',
        "",
        {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          tapToDismiss: false,
          titleClass: "alert-title",
          positionClass: "toast-top-center",
          toastClass:
            "ngx-toastr alert alert-dismissible alert-info alert-notify"
        }
      );
    }
  }

  openDefaultModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
  }
  openNotificationModal(modalNotification: TemplateRef<any>) {
    this.notificationModal = this.modalService.show(
      modalNotification,
      this.notification
    );
  }
  openFormModal(modalForm: TemplateRef<any>) {
    this.formModal = this.modalService.show(modalForm, this.form);
  }

  ngOnInit() {}
  basicSwal() {
    swal.fire({
      title: "Here's a message!",
      text: "A few words about this sweet alert ...",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-primary"
      }
    });
  }
  infoSwal() {
    swal.fire({
      title: "Info",
      text: "A few words about this sweet alert ...",
      icon: "info",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-info"
      }
    });
  }
  successSwal() {
    swal.fire({
      title: "Success",
      text: "A few words about this sweet alert ...",
      icon: "success",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-success"
      }
    });
  }
  warningSwal() {
    swal.fire({
      title: "Warning",
      text: "A few words about this sweet alert ...",
      icon: "warning",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-warning"
      }
    });
  }
  questionSwal() {
    swal.fire({
      title: "Are you sure?",
      text: "A few words about this sweet alert ...",
      icon: "question",
      buttonsStyling: false,
      customClass: {
        confirmButton: "btn btn-default"
      }
    });
  }
}
