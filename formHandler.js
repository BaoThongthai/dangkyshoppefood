document.addEventListener('DOMContentLoaded', function() {
    var forms = document.getElementsByClassName('php-email-form');

    var formSubmitHandler = function(event) {
        event.preventDefault();
        var form = event.target;
        var formData = new FormData(form);
        var phoneInput = form.querySelector('input[name="phone"]');
        var phoneNumber = phoneInput.value.trim();

        if (!phoneNumber) {
            alert('Vui lòng điền số điện thoại.');
            return;
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://662a2fff67df268010a2eab5.mockapi.io/thongtinkhachhangshoppe', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                form.querySelector('.loading').innerHTML = '';
                if (xhr.status === 200) {
                    form.querySelector('.sent-message').innerHTML = 'Bạn đã đăng ký thành công. Chúng tôi sẽ liên lạc sớm nhất có thể.';
                    form.querySelector('.sent-message').style.display = 'block';
                    form.querySelector('.error-message').style.display = 'none';
                } else {
                    form.querySelector('.sent-message').innerHTML = 'Bạn đã đăng ký thành công. Chúng tôi sẽ liên lạc sớm nhất có thể.';
                    form.querySelector('.sent-message').style.display = 'block';
                    form.querySelector('.error-message').style.display = 'none';
                }
                setTimeout(function() {
                    form.reset();
                }, 1000);
            }
        };

        xhr.send(new URLSearchParams(formData).toString());
        form.querySelector('.loading').innerHTML = 'Loading...';
    };

    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', formSubmitHandler);
    }
});
