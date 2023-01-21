const form = document.querySelector('form')
let nlwSetup = new NLWSetup(form)

const data = {
    run:["01-01","01-02", "01-06", "01-07", "01-08"],
}

nlwSetup.setData(data)
nlwSetup.load()