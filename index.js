import Benchmark from 'benchmark';
import cryptoUUID from './oldFunction.js';
import v4UUID from './newFunction.js';

const suite = new Benchmark.Suite;

suite
    .add('crypto-UUID', function() {
        new cryptoUUID();
    }).add('v4-UUID', function() {
        new v4UUID();
    })
    .on('cycle', (event) => console.log(String(event.target))).on('complete', function() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    })
    .run();