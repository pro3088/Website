"https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js">

function download(){
    axios({
        url:'https://drive.google.com/file/d/1Lioh3PKypXf6k0J7XNPxDRdu5wccglRy/view?usp=sharing',
        method:'GET',
        responseType: 'blob'
})
.then((response) => {
       const url = window.URL
       .createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'image.jpg');
              document.body.appendChild(link);
              link.click();
})
}
  