const { expect } = require('@playwright/test');

class HomePage{ 
    constructor(page){
     this.page = page;
     this.elements = page.getByText('Elements');
        }

    async cargarPagina(){
        await this.page.goto('https://demoqa.com/');
    }

    async goToElements(){
        await this.elements.click();
    }
}

module.exports = HomePage;
