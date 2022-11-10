function helloWorld() {

    console.log('Hello World!');
}

const saudacao = () => {
    
    const hora = new Date().getHours();
    if(hora<= 12) return 'Bom Dia!';
    if(hora<= 18) return 'Bom Tarde!';
    return 'Boa Noite!';

helloWorld();
    console.log(`A saudação do momento é  ${saudacao()}`)};