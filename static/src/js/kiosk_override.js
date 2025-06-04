
odoo.define('hr_attendance_kiosk_limit_override.kiosk_logic', function (require) {
    "use strict";

    const publicWidget = require('web.public.widget');

    publicWidget.registry.KioskLogic = publicWidget.Widget.extend({
        selector: '.o_hr_attendance_kiosk_body',
        start: function () {
            const now = new Date();
            const hour = now.getHours();
            let message = "";
            let speech = "";

            if (hour < 15) {
                message = "Преди 15:00 – само ЧЕК ИН";
                speech = "Успешен вход";
            } else {
                message = "След 15:00 – само ЧЕК АУТ";
                speech = "Успешен изход";
            }

            const box = document.createElement('div');
            box.innerText = message;
            Object.assign(box.style, {
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '12px 24px',
                zIndex: 9999,
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: 'bold',
                boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
            });

            document.body.appendChild(box);
            setTimeout(() => box.remove(), 2000);

            // Гласово съобщение
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(speech);
            utterance.lang = "bg-BG";
            synth.speak(utterance);
        }
    });
});
