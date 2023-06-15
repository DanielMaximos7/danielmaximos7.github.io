document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
  
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        const target = this.getAttribute('href').replace('#', '');
        
        // Remove active class from all tabs and contents
        tabs.forEach(function(tab) {
          tab.classList.remove('active');
        });
        contents.forEach(function(content) {
          content.classList.remove('show');
        });
  
        // Add active class to the clicked tab and show the corresponding content
        this.classList.add('active');
        document.getElementById(target).classList.add('show');
      });
    });
  });

  function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".sample-section").offset().top;
    var header_height = $(".sample-header-section").outerHeight();
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
  }
  parallax_height();
  $(window).scroll(function() {
    parallax_height();
  });
  $(window).resize(function() {
    parallax_height();
  });

 // WULHMP2XGLK74SFL
