// https://stackoverflow.com/questions/50795042/create-a-copy-button-without-an-input-text-box/50795833
const Clipboard_CopyTo = value => {
  const tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function getQuotes(keyword) {
  return fetch(`https://animechan.vercel.app/api/quotes/character?name=${keyword}`)
      .then(response => {
          return response.json()
      })
      .then(response => {
          if( response.error === "Bad Request" ) {
              throw new Error(`inputan kosong or ${response.error}`);
          } else if( response.error === "No related quotes found!" ) {
              throw new Error(`keyword tidak dikenali or ${response.error}`);
          }
          const spinner = document.querySelector('.spinner-border');
          spinner.classList.toggle('d-none');
          return response;
      });
}


export { Clipboard_CopyTo, getQuotes };