<footer class="footer"><div class="container">
  <div class="footer_contacts"><a href="./" class="footer_logo"><img src="./img/logo_white.png"></a>
  <div class="footer_contact"><img src="./img/marker.png"> Львів</div>
  <a class="footer_contact" href="tel:+380962117725"><img src="./img/phone.png"> (096) 211-77-25</a>
  <a class="footer_contact" href="mailto:info_lannet@mail.com" ><img src="./img/email.png"> info_lannet@mail.com</a>
  <div class="social"><a href="tg://resolve?domain=lannetLviv"><img src="./img/telegram.png"> </a>
  <a href=""><img src="./img/viber.png"> </a>
  <a href=""><img src="./img/instagram.png"> </a>
  <a href="https://lannet-lviv.speedtestcustom.com"><img src="./img/speedtest.png"> </a></div>
    <div class="creditline">© 2020. Ланнет. Усі права захищено </div>
  </div>

  <ul class="footer_menu"><li><a href="./internet.php">Інтернет</a></li>           
<li><a href="./tv.php">   Телебачення       </a></li> 
<li><a href="./loyalty.php">       Лояльність          </a></li> 
<li><a href="./shop.php">    Магазин           </a></li> 
<li><a href="./support.php">   Підтримка           </a></li> 
<li><a href="./job.php">   Вакансії         </a></li> 
<li><a href="./documents.php">     Документи</a></li> </ul>

<ul class="footer_links"><li><a href="https://stat.lannet.lviv.ua/" class="footer_my">особистий кабінет</a></li> 
<li><a href="./docs/pub_dog_rev01012020.pdf" target="_blank">Публічний абонентський договір Інтернет</a></li>          
<li><a href="./docs/reglament2020.pdf" target="_blank">Регламент підключення – Квартири</a></li> 
<li><a href="./docs/reglament_home2020.pdf" target="_blank">  Регламент підключення – Будинку      </a></li> 
<li><a href="./docs/lannet_pay-blank (1).pdf" target="_blank">   Квитанція для оплати </a></li> 
<li><a href="./docs/public_doc_OmegaTV.pdf" target="_blank"> Публічний абонентський договір про надання Сервісу Омега ТВ              </a></li> 
<li><a href="./docs/img20200131_22181220.pdf" target="_blank"> Протокол вимірювання 2019              </a></li> 
<li><a href="./docs/report_22876 (1).pdf" target="_blank"> Звіт про якість телекомунікаційних послуг за 2019  </a></li> </ul>
</div>
</footer>
<script src="js/main.js">
</script>
<script src="owlcarousel/owl.carousel.min.js">
</script>
<script >
  $(document).ready(function(){
    $('.main_banner').owlCarousel({
      mouseDrag: false,
      nav: true,
      dots: true,
      rewind: true,
      autoplay: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
          items:1  });
                      });
</script>

<script src="js/lightbox.js">
</script>


<script type="text/javascript">
(function($) {
$(function() {

  $('ul.tabs__caption').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
      });
    });
  });

})
})($)
</script>