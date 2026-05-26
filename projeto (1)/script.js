const senhaInput = document.querySelector(
    'input[type="password"]'
);

const olho = document.querySelector(
    '.fa-eye-slash'
);

olho.addEventListener('click', () => {

    if(senhaInput.type === 'password'){

        senhaInput.type = 'text';

        olho.classList.remove('fa-eye-slash');
        olho.classList.add('fa-eye');

    }else{

        senhaInput.type = 'password';

        olho.classList.remove('fa-eye');
        olho.classList.add('fa-eye-slash');

    }

});