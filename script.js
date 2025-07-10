$(document).ready(() => {
    $('button').on('click', e => {
        e.preventDefault();
        let dados = $('form').serialize();
        // console.log(dados);
        $.ajax({
            type: 'post',
            url: 'app.php',
            data: dados,
            dataType: 'json',
            success: dados => { console.log(dados) },
            error: erro => { console.log(erro) }
        });
    });
});