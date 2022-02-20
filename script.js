(() => {
    let botaoDeEditar = document.querySelectorAll('.btn-editar');

    function openModalEditar() {
        let modal = document.querySelector('#dv-modal');
        botaoDeEditar.forEach((botao) => {
            botao.addEventListener('click', () => {
                if (typeof modal == 'undefined' || modal === null)
                    return;

                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            })
        })

    }

    let botaoDeDeletar = document.querySelectorAll('.btn-deletar');

    function openModalDeletar() {
        let modal = document.querySelector('#dd-modal');
        botaoDeDeletar.forEach((botao) => {
            botao.addEventListener('click', () => {
                if (typeof modal == 'undefined' || modal === null)
                    return;

                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            })
        })
    }

    function closeModal(mn) {
        let modal = document.getElementById(mn);

        if (typeof modal == 'undefined' || modal === null)
            return;

        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function init() {
        openModalEditar();
        openModalDeletar();

    }

    init();
})()