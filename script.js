$(document).ready(() => {
    $('button').on('click', e => {
        e.preventDefault();
        $.ajax({
            type: 'get',
            url: 'app.php',
            data: '',
            success: dados => { console.log(dados) },
            error: erro => { console.log(erro) }
        });
    });
});