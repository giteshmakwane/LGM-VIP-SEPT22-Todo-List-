document.getElementById('btn').addEventListener('click',
        function () {
            let input = document.getElementById('input').value;

            let elem = document.createElement('li');
            let btn1 = document.createElement('button');
            let btn2 = document.createElement('button');

            btn1.innerText = "Done";
            btn2.innerText = "Delete";

            elem.innerText = input;

            let ul = document.querySelector('ul');

            ul.appendChild(elem);
            elem.appendChild(btn1);
            elem.appendChild(btn2);

            btn1.style.border = "none";
            btn1.style.marginLeft = "4%";
            btn1.style.borderRadius = "10px";
            btn1.style.backgroundColor = "violet";
            btn1.style.padding = "5px";
            btn1.style.width = "6%";
            btn1.style.fontWeight = "bold";

            btn2.style.border = "none";
            btn2.style.marginLeft = "4%";
            btn2.style.borderRadius = "10px";
            btn2.style.backgroundColor = "violet"; 
            btn2.style.padding = "5px";
            btn2.style.width = "6%";
            btn2.style.fontWeight = "bold";

            elem.style.color="black";
            elem.style.fontSize="18px";
            elem.style.fontWeight="bold";


            btn1.addEventListener('click',
                function () {
                    elem.style.textDecoration = "line-throught";
                }
            );
            btn2.addEventListener('click',
                function () {
                    elem.remove();
                }
            );

            document.getElementById('input').value = "";
        }
    );
