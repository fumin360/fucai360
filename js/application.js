// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })

    // popover demo
    $("a[rel=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      })

	 })

}(window.jQuery)



