function ValidacaoCpf (cpf){

    var nums = { 
        cpf_vet : cpf.toString().split(''),
        cpforiginal : cpf,
        Get : function(seq){
            return this.cpf_vet[seq-1]
        },    
        Soma : function(op){
            var soma = 0;
            var multi;
            multi = op==1 ? 10 : 11;
            for (let i = 0; i < this.cpf_vet.length; i++) {
                soma += (Number(this.cpf_vet[i]) * Number(multi));
                multi--;
            }
            soma += op==2 ? this.resto(1) * multi : 0;
            return soma;
        },
        
        resto : function(op){
            var resto = (this.Soma(op)*10)%11
            return resto == 10 ? 0 : resto;
        }
    };

    if(cpf.length < 9){
        console.log('Digite os 9 primeiros digitos do cpf')
    } else {
        var resto = nums.resto(1)
        var rest2 = nums.resto(2)
        return nums.cpforiginal+"-"+resto+rest2
    }

}


console.log(ValidacaoCpf(139445006))

var a1 = 123456789%10
var a2 = (123456789%100 - a1)/10
var a3 = (123456789%1000 - (a2*10 + a1))/100
var a4 = (123456789%10000 - (a3*100+a2*10 + a1))/1000
var a5 = (123456789%100000 - (a4*1000+a3*100+a2*10 + a1))/10000
var a6 = (123456789%1000000 - (a5*10000+a4*1000+a3*100+a2*10 + a1))/100000
var a7 = (123456789%10000000 - (a6*100000+a5*10000+a4*1000+a3*100+a2*10 + a1))/1000000


console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
console.log(a6)
console.log(a7)