const axios = require('axios');
import { Parent } from "./parent";

interface IPokemon {
    name: string;
    url: string;
}

let final: IPokemon[] = []



class Child extends Parent {
    pokemons?: IPokemon[]
    async fetchData() {
        let next = this.url;
        let result: IPokemon[] = []
        while (next) {
            await axios.get(next)
                .then(function (response) {
                    result = [...result, ...response.data.results]
                    next = response.data.next
                })
                .catch(function (error: Error) {
                    // handle error
                    console.log(error);
                })
        }
        this.pokemons = result
        return
    }

    printlist() {
        console.log(this.pokemons)
    }

    filter(itemname: String) {
        if (this.pokemons) {
            const filtered = this.pokemons.filter(item => item.name == itemname)
            return filtered.pop()
        }
        else {
            console.log('Error Fetching API, Poke List is EMPTY')
            return
        }
    }

}
async function start() {
    const poke = 'pidgeotto'
    const childO = new Child()
    await childO.fetchData()
    // childO.printlist()
    const pidgeotto: IPokemon | undefined = childO.filter(poke)
    if (pidgeotto != undefined) {
        let { name, url } = pidgeotto
        console.log(url)
        console.log(pidgeotto.url + " // This one is using Interfaces") //even better with interfaces
    } else {
        console.log(`Could Not Filter ${poke}`)
    }

}

start()

