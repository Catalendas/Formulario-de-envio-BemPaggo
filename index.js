    let menos = document.querySelector("#menos") 
    let mais = document.querySelector("#mais")

    menos.addEventListener("click", (e) => {

        e.preventDefault()

        let results = document.querySelector("#results")

        let value = results.value

         document.querySelector("#results").value = --value
         

    })

    mais.addEventListener("click", (e) => {

        e.preventDefault()

        let results = document.querySelector("#results")

        let value = results.value

         document.querySelector("#results").value = ++value
         

    })

    function iniciaModal (modalID) {
        const modal = document.getElementById(modalID)
        if(modal) {

            modal.classList.add('mostrar')
    
            modal.addEventListener('click', (e) => {
    
                if(e.target.id == modalID || e.target.className == 'fechar'){
    
                    modal.classList.remove('mostrar')
    
                }
            })
        }
    }

    const logo = document.getElementById('enviar')
    logo.addEventListener('click', (e) => { 
        e.preventDefault()
         iniciaModal('modal-checkOut')
    })

   