import { toast } from 'react-toastify';

export default class Helper {

    static showToastMessage(message, isError) {
        if (isError) {
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    static addSelectedElement() {
        var elements = document.querySelectorAll('.header-tab');
        let currentHash = window.location.hash.replace("#", "");
        currentHash = decodeURIComponent(currentHash);
        elements.forEach(item => {
            let urlName = item.getAttribute('data-active');

            if (urlName == currentHash) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })

    }
}