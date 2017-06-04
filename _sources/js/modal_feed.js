
export default function send_mail() {
  document.querySelector('#modal_callwrite .closer').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#modal_callwrite').classList.add('close_modal');
  });

  document.querySelector('#modal_callwrite .send')
    .addEventListener('click', e => {
      e.preventDefault();

      let data = {
        name: document.querySelector('#modal_callwrite input[name="name"]').value,
        email: document.querySelector('#modal_callwrite input[name="number"]').value,
        message: document.querySelector('#modal_callwrite input[name="question"]').value
      }

      $.post('/mail.php', data)
        .done( function (value) {
          location.href="/thx.html"
        });

      document.querySelector('#modal_callwrite').classList.add('close_modal');
    });
}
