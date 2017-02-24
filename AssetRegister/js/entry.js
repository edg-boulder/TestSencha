$(window, document, undefined).ready(function () {

    $('input').each(function () {
        var $this = $(this);
        if ($this.val()) {
            $this.addClass('used');
        }
    });

    $('button[id="reset"]').on('click', (function () {
        $('input[type=text],input[type=password],input[type=email]').each(function () {
            var $this = $(this);
            $this.val('');
            $this.removeClass('used');
        });
    }));

    /*$('button[id="btnSubmit"]').on('click', (function () {
        var $this = $(this);

        console.log('submitting');
        $this.attr('disabled', 'disabled');
        $this.attr('text', 'Submitting...');
        
        document.forms[0].submit();
    }));*/

    $('input').blur(function () {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    var $ripples = $('.ripples');

    $ripples.on('click.Ripples', function (e) {

        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');

    });

    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function (e) {
        $(this).removeClass('is-active');
    });

});