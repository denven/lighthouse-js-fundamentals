var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map (function(elem){
    elem = Number((elem * 1.15).toFixed(2));
    return elem;
});

console.log(totals);
