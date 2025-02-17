let birinci_eded = 14;
let ikinci_eded = 4;
let toplam_sonrasi = 0;
let cixma_sonrasi = 0;
let bolme_sonrasi = 0;
let vurma_sonrasi = 0;
let delete_sonrasi = 0;
// FUNCTION FOR SUM
function topla() {
toplam_sonrasi = birinci_eded + ikinci_eded ;
document.getElementById("netice").innerHTML = "Neticemiz: " + toplam_sonrasi;
}
// FUNCTION FOR SUBscrapt
function Cixma() {
    cixma_sonrasi = birinci_eded - ikinci_eded ;
    document.getElementById("netice").innerHTML = "Neticemiz: " + cixma_sonrasi;
    }

    function Vurma() {
        vurma_sonrasi = birinci_eded * ikinci_eded ;
        document.getElementById("netice").innerHTML = "Neticemiz: " + vurma_sonrasi;
        }
        function Bolme() {
            bolme_sonrasi = birinci_eded / ikinci_eded ;
            document.getElementById("netice").innerHTML = "Neticemiz: " + bolme_sonrasi;
            }
            function Delete() {
                delete_sonrasi = 0 ;
                document.getElementById("netice").innerHTML = "Neticemiz: " + 0;
                }
    

        