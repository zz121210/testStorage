        
        let alpa=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let count = 0;
        function bingo(N){
            let btn =document.querySelector('#bingoBoard button:nth-child('+N+')');
            if(alpa[N] == 0){
                count++;
                alpa[N] = 1;
                btn.style.backgroundColor="black";
                btn.style.color="white";
                console.log(count);
            }else{
                count--;
                alpa[N] = 0;
                btn.style.backgroundColor="white";
                btn.style.color="black";
                console.log(count);
            }
        }

        function result(){
                document.querySelector('#testBox').style.display='none';
                document.querySelector('#result').style.display='block';
                if(count>=20){
                    document.querySelector('#highLevel').style.display='block';
                    document.querySelector('#middleLevel').style.display='none';
                    document.querySelector('#lowLevel').style.display='none';
                    document.querySelector('#not').style.display='none';
                }else if(count>=10){
                    document.querySelector('#highLevel').style.display='none';
                    document.querySelector('#middleLevel').style.display='block';
                    document.querySelector('#lowLevel').style.display='none';
                    document.querySelector('#not').style.display='none';
                }else if(count >= 1){
                    document.querySelector('#highLevel').style.display='none';
                    document.querySelector('#middleLevel').style.display='none';
                    document.querySelector('#lowLevel').style.display='block';
                    document.querySelector('#not').style.display='none';
                }else{
                    document.querySelector('#highLevel').style.display='none';
                    document.querySelector('#middleLevel').style.display='none';
                    document.querySelector('#lowLevel').style.display='none';
                    document.querySelector('#not').style.display='block';
                }
        }

        function retry(){
            document.querySelector('#testBox').style.display='block';
            document.querySelector('#result').style.display='none';
        }