const kafkatrace = 'kafkatrace';

describe ('NPM Package Installation Test', ()=>{
    it(`should have installed ${kafkatrace}`, ()=>{
        expect(() => {
            require(kafkatrace);
          }).not.toThrow();
    })
})