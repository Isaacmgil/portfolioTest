document.addEventListener("DOMContentLoaded", (e) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `

        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7846.419093182096!2d-66.86350623062813!3d10.484140880750875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58f742aa7689%3A0xf692e56bb1ff6749!2sLas%20Mercedes%2C%20Caracas%2C%20Miranda!5e0!3m2!1ses!2sve!4v1732497314031!5m2!1ses!2sve"></iframe>
        
        `;
    }, 600);

}); 