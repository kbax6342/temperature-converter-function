<script type="text/javascript">
           
                function convertToC() {
                    var fTempVal = parseFloat(document.getElementById('fTemp').value);
                var cTempVal = (fTempVal - 32) * (5/9);
                document.getElementById('cTemp').value = cTempVal;
            }

            function convertToF() {
                var cTempVal = parseFloat(document.getElementById('cTemp').value);
                var fTempVal = (cTempVal * (9/5)) + 32;
                document.getElementById('fTemp').value = fTempVal;
            }
        
    </script>