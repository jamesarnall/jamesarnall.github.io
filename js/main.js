(function() {

    function toggleGpg(evt) {
        var modal = document.getElementById("key-modal");
        var modalClasses = modal.classList;
        modalClasses.toggle("key-modal--active");
        return false;
    }

    function closeModal(evt) {
        console.log('close');
        toggleGpg();
        return false;
    }

    var keyLink = document.getElementById("gpg_key");
    var modalClose = document.getElementById("key-modal").querySelector('.key-modal__close');
    keyLink.addEventListener("click", toggleGpg);
    modalClose.addEventListener("click", closeModal);
    console.log(keyLink);

}());