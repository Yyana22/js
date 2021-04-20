$(document).ready(function () {                                                           // тоже самое что: window.addEventListener('load',() => {})
    // $('div').css({ 'color': 'red' });
    // $('.div').css({ 'font-size': '40' });
    // $('#div').css({ 'color': 'blue' });

    // let dataAttr = $('#h2').data('number');
    // $('input[name="message"]').css({ 'border': '1px solid green' });
    // $('ul li:nth-child(3)').css({ 'font-size': '40px' })



    // $('div:has("span")').css({ 'font-size': '40px' });  //все дивы, в котором есть спан

    // let attr = $('input').attr('type');
    // console.log(attr);

    // //событие mouseenter (при наведении курсора)

    // $('#button').click(function () {                    //  $('#button').on('click',function () {   
    //     // $('.div').toggleClass('active');               // add,remove,toggle
    //     // $('.div').show();                               // можно напрямую без классов скрывать\показывать элементы
    //     // $('.div').hide();  можно так же использовать метод toggle   
    //     $('.div').toggle();
    // })



    // $('input').on('input', function () {   //html == innerHTML
    //     $('.result').html($(this).val());
    // })


    $('.btn').on('click', function () {
        $('.div').animate({ 'height': '600px' }, 1000);  //за 1 клик выполняет сразу 2 анимации
        $('.div').animate({ 'height': '400px' }, 1000);
    })

})