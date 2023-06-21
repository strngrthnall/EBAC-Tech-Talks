AOS.init();

const dataDoEvento = new Date('Dec 12, 2023 19:00:00')
const timestampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(()=>{
  const agora = new Date()
  const timeStampAtual = agora.getTime()

  const distanciaAteOEvento = timestampDoEvento - timeStampAtual

  const segundoEmMs = 1000
  const minutoEmMs = segundoEmMs * 60
  const horaEmMs =  minutoEmMs * 60
  const diaEmMs = horaEmMs * 24

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs)
  const horasAteOEvento = Math.floor(Math.floor(distanciaAteOEvento % diaEmMs) / horaEmMs)
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs)
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundoEmMs)

  const listaDaData = [diasAteOEvento, horasAteOEvento, minutosAteOEvento, segundosAteOEvento]

  for(var i in listaDaData) {
    if(listaDaData[i] <= 9) {
      listaDaData[i] = listaDaData[i].toString().padStart(2, '0')
    }
  }

  document.getElementById('contador').innerHTML = `${listaDaData[0]} dias ${listaDaData[1]}:${listaDaData[2]}:${listaDaData[3]}`

  if(distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'evento expirado'
  }
}, 1000)