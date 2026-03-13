
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector('.form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = document.querySelector('[name="delay"]').value;
    const state = document.querySelector('[name="state"]:checked').value
    const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (state === 'fulfilled') {
            resolve (delay)
        } else {
            reject(delay)
        }
    }, Number(delay));
    

});
promise.then(
  value => {
    console.log(`✅ Fulfilled promise in ${value}ms`);
    iziToast.success({
      title: 'Success',
      message: `✅ Fulfilled promise in ${value}ms`,
    });
  },
  error => {
    console.log(`❌ Rejected promise in ${error}ms`);
    iziToast.error({
    title: 'Error',
    message: `❌ Rejected promise in ${error}ms`,
}); 
  }
);
});
