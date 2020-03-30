/* 
  ОБРАБОТЧИК ОШИБОК
*/
function showError(error, element) {
  if (
    $(element)
      .parent()
      .find(".valerror").length !== 0
  )
    return false;
  if ($(element).attr("name") == "name") {
    message = "Введите имя";
  } else if ($(element).attr("name") == "phone") {
    message = "Введите номер телефона";
  }
  $(element)
    .parent()
    .prepend("<div class='valerror'>" + message + "</div>");
  return true;
}

//var windowIsOpen = false;

//setTimeout(function() {
// openModalWindow("modal-popup");
//}, 20000);

/* 
    Модальные окна
*/

(function() {
  function openModalWindow(id) {
    //  if (windowIsOpen) return;
    //   windowIsOpen = true;
    var modal = $("#" + id);
    var dark = $(modal).find(".modal__dark");
    var win = $(modal).find(".modal__window");
    $(modal).show();
    $(dark).fadeIn(300);
    $(win).fadeIn(500);
  }
  window.openModalWindow = openModalWindow;
  $(".modal__close, .modal__dark").on("click", function() {
    // windowIsOpen = false;
    var modal = $(this).closest(".modal");
    var dark = $(modal).find(".modal__dark");
    var win = $(modal).find(".modal__window");
    $(dark).fadeOut(300);
    $(win).fadeOut(500);
    setTimeout(function() {
      $(modal).hide();
    }, 500);
  });

  $("[data-modal]").on("click", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-modal");
    openModalWindow(id);
  });
})();

/* 
    Плавная прокрутка
*/
(function() {
  function scrollTo(id) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#" + id).offset().top
      },
      1100
    );
  }
  $("[data-scroll]").on("click", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-scroll");
    scrollTo(id);
  });
})();

/* 
    Кнопка "Вверх"
*/
(function() {
  function ifScrollUp() {
    if ($(this).scrollTop() > 250) {
      $(".scrollUp").addClass("scrollUp_show");
    } else {
      $(".scrollUp").removeClass("scrollUp_show");
    }
  }
  $(window).scroll(ifScrollUp);
  ifScrollUp();
  $(".scrollUp").on("click", function(e) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: 0
      },
      1100
    );
  });
})();

function validForm(data) {
  for (var i = 0; i < data.length; i++) {
    if ($.trim(data[i].value) === "") return false;
  }
  return true;
}

/* 
    Форма "Замовити дзвінок"
*/
(function() {
  $("#callback_form")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        name: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        phone: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),
            formname: "callback"
          },
          success: function() {
            $(form)
              .siblings(".formcomplete_ok")
              .slideDown(500);
            ga("send", "event", "terms", "calculate");
            fbq("track", "Lead");
          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text")
          .prop("disabled", true)
          .val("");
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/* 
    Форма "Підключитись"
*/
(function() {
  $("#join_form")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        name: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        phone: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),
            address: $(form)
              .find(".address")
              .val(),
            formname: "join"
          },
          success: function() {
            $(form)
              .siblings(".formcomplete_ok")
              .slideDown(500);
            ga("send", "event", "popupform", "send");
            fbq("track", "Lead");
          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text")
          .prop("disabled", true)
          .val("");
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/* 
    Форма "Інтернет"
*/
(function() {
  $("#internet_form")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        name: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        phone: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),
            address: $(form)
              .find(".address")
              .val(),
            formname: "internet"
          },
          success: function() {
            $(form)
              .siblings(".formcomplete_ok")
              .slideDown(500);
            ga("send", "event", "popupform", "send");
            fbq("track", "Lead");
          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text")
          .prop("disabled", true)
          .val("");
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/* 
    Форма "ТБ"
*/
(function() {
  $("#tv_form")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        name: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        phone: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),
            address: $(form)
              .find(".address")
              .val(),
            formname: "tv"
          },
          success: function() {
            $(form)
              .siblings(".formcomplete_ok")
              .slideDown(500);
            ga("send", "event", "popupform", "send");
            fbq("track", "Lead");
          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text")
          .prop("disabled", true)
          .val("");
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/* 
    Форма "Резюме"
*/
(function() {
  $("#job_form")
    .submit(function(e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        name: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          }
        },
        phone: {
          required: {
            depends: function() {
              $(this).val($.trim($(this).val()));
              return true;
            }
          },
          minlength: 19
        }
      },
      success: function(label, element) {
        $(element)
          .parent()
          .removeClass("valerror");
        return true;
      },
      errorPlacement: function(error, element) {
        $(element)
          .parent()
          .addClass("valerror");
        return true;
      },
      submitHandler: function(form) {
        $.ajax({
          url: "send.php",
          type: "POST",
          data: {
            name: $(form)
              .find(".name")
              .val(),
            phone: $(form)
              .find(".phone-input")
              .val(),
            cv: $(form)
              .find(".cv")
              .val(),
            formname: "job"
          },
          success: function() {
            $(form)
              .siblings(".formcomplete_ok")
              .slideDown(500);
            ga("send", "event", "popupform", "send");
            fbq("track", "Lead");
          },
          error: function() {
            $(form)
              .siblings(".formcomplete_error")
              .slideDown(500);
          }
        });
        sendToRest($(form).serialize());
        $(form)
          .find(".input-text")
          .prop("disabled", true)
          .val("");
        $(form)
          .find(".button")
          .prop("disabled", true);
      }
    });
})();

/* 
    Поля ввода для номеров телефона
*/
(function() {
  $(".phone-input").mask("+38 (000) 000 00 00", {
    placeholder: "+38 (___) ___ __ __"
  });
})();

$(function() {
  $(".hamburger").click(function() {
    $(".menu_mobile").toggleClass("active");
  });
  $(".accordion_body").slideUp();
  $(".accordion_head").click(function() {
    $(this).toggleClass("active");
    $(this)
      .next()
      .slideToggle();
  });
  $(".close, .overlay").click(function() {
    $(".popup").addClass("popup-hide");
  });

  $(".menu_mobile >a").click(function() {
    $(".menu_mobile").removeClass("active");
  });
  //    top button
  $(".show-popup-one").click(function() {
    $(".popup-one").removeClass("popup-hide");
  });
  //    first-section button
  $(".show-popup-two").click(function() {
    $(".popup-two").removeClass("popup-hide");
  });

  var $root = $("html, body");

  //setTimeout(function() {
  // $('.popup-three').removeClass('popup-hide')
  //}, 10000);

  $('a[href^="#"]').click(function() {
    $(".menu_mobile").removeClass("active");
    $root.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      500
    );

    return false;
  });
});
