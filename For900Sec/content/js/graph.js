/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 560.0, "minX": 0.0, "maxY": 3767.0, "series": [{"data": [[0.0, 560.0], [0.1, 561.0], [0.2, 561.0], [0.3, 562.0], [0.4, 562.0], [0.5, 563.0], [0.6, 563.0], [0.7, 563.0], [0.8, 563.0], [0.9, 563.0], [1.0, 563.0], [1.1, 563.0], [1.2, 563.0], [1.3, 564.0], [1.4, 564.0], [1.5, 564.0], [1.6, 564.0], [1.7, 564.0], [1.8, 564.0], [1.9, 564.0], [2.0, 564.0], [2.1, 564.0], [2.2, 564.0], [2.3, 564.0], [2.4, 564.0], [2.5, 565.0], [2.6, 565.0], [2.7, 565.0], [2.8, 565.0], [2.9, 565.0], [3.0, 565.0], [3.1, 565.0], [3.2, 565.0], [3.3, 565.0], [3.4, 565.0], [3.5, 566.0], [3.6, 566.0], [3.7, 566.0], [3.8, 566.0], [3.9, 566.0], [4.0, 566.0], [4.1, 566.0], [4.2, 566.0], [4.3, 566.0], [4.4, 566.0], [4.5, 566.0], [4.6, 566.0], [4.7, 566.0], [4.8, 567.0], [4.9, 567.0], [5.0, 567.0], [5.1, 567.0], [5.2, 567.0], [5.3, 567.0], [5.4, 567.0], [5.5, 567.0], [5.6, 567.0], [5.7, 567.0], [5.8, 567.0], [5.9, 567.0], [6.0, 567.0], [6.1, 567.0], [6.2, 568.0], [6.3, 568.0], [6.4, 568.0], [6.5, 568.0], [6.6, 568.0], [6.7, 568.0], [6.8, 568.0], [6.9, 568.0], [7.0, 568.0], [7.1, 568.0], [7.2, 568.0], [7.3, 568.0], [7.4, 568.0], [7.5, 569.0], [7.6, 569.0], [7.7, 569.0], [7.8, 569.0], [7.9, 569.0], [8.0, 569.0], [8.1, 569.0], [8.2, 569.0], [8.3, 569.0], [8.4, 569.0], [8.5, 569.0], [8.6, 569.0], [8.7, 569.0], [8.8, 569.0], [8.9, 569.0], [9.0, 570.0], [9.1, 570.0], [9.2, 570.0], [9.3, 570.0], [9.4, 570.0], [9.5, 570.0], [9.6, 570.0], [9.7, 570.0], [9.8, 570.0], [9.9, 570.0], [10.0, 570.0], [10.1, 570.0], [10.2, 570.0], [10.3, 570.0], [10.4, 570.0], [10.5, 570.0], [10.6, 570.0], [10.7, 570.0], [10.8, 570.0], [10.9, 570.0], [11.0, 570.0], [11.1, 570.0], [11.2, 570.0], [11.3, 571.0], [11.4, 571.0], [11.5, 571.0], [11.6, 571.0], [11.7, 571.0], [11.8, 571.0], [11.9, 571.0], [12.0, 571.0], [12.1, 571.0], [12.2, 571.0], [12.3, 571.0], [12.4, 571.0], [12.5, 571.0], [12.6, 571.0], [12.7, 571.0], [12.8, 571.0], [12.9, 571.0], [13.0, 572.0], [13.1, 572.0], [13.2, 572.0], [13.3, 572.0], [13.4, 572.0], [13.5, 572.0], [13.6, 572.0], [13.7, 572.0], [13.8, 572.0], [13.9, 572.0], [14.0, 572.0], [14.1, 572.0], [14.2, 572.0], [14.3, 572.0], [14.4, 572.0], [14.5, 572.0], [14.6, 572.0], [14.7, 572.0], [14.8, 572.0], [14.9, 572.0], [15.0, 572.0], [15.1, 572.0], [15.2, 572.0], [15.3, 572.0], [15.4, 573.0], [15.5, 573.0], [15.6, 573.0], [15.7, 573.0], [15.8, 573.0], [15.9, 573.0], [16.0, 573.0], [16.1, 573.0], [16.2, 573.0], [16.3, 573.0], [16.4, 573.0], [16.5, 573.0], [16.6, 573.0], [16.7, 573.0], [16.8, 573.0], [16.9, 573.0], [17.0, 573.0], [17.1, 573.0], [17.2, 573.0], [17.3, 573.0], [17.4, 573.0], [17.5, 573.0], [17.6, 573.0], [17.7, 573.0], [17.8, 573.0], [17.9, 574.0], [18.0, 574.0], [18.1, 574.0], [18.2, 574.0], [18.3, 574.0], [18.4, 574.0], [18.5, 574.0], [18.6, 574.0], [18.7, 574.0], [18.8, 574.0], [18.9, 574.0], [19.0, 574.0], [19.1, 574.0], [19.2, 574.0], [19.3, 574.0], [19.4, 574.0], [19.5, 574.0], [19.6, 575.0], [19.7, 575.0], [19.8, 575.0], [19.9, 575.0], [20.0, 575.0], [20.1, 575.0], [20.2, 575.0], [20.3, 575.0], [20.4, 575.0], [20.5, 575.0], [20.6, 575.0], [20.7, 575.0], [20.8, 575.0], [20.9, 575.0], [21.0, 576.0], [21.1, 576.0], [21.2, 576.0], [21.3, 576.0], [21.4, 576.0], [21.5, 576.0], [21.6, 576.0], [21.7, 576.0], [21.8, 576.0], [21.9, 576.0], [22.0, 576.0], [22.1, 576.0], [22.2, 576.0], [22.3, 576.0], [22.4, 576.0], [22.5, 576.0], [22.6, 577.0], [22.7, 577.0], [22.8, 577.0], [22.9, 577.0], [23.0, 577.0], [23.1, 577.0], [23.2, 577.0], [23.3, 577.0], [23.4, 577.0], [23.5, 577.0], [23.6, 577.0], [23.7, 577.0], [23.8, 577.0], [23.9, 577.0], [24.0, 578.0], [24.1, 578.0], [24.2, 578.0], [24.3, 578.0], [24.4, 578.0], [24.5, 578.0], [24.6, 578.0], [24.7, 578.0], [24.8, 578.0], [24.9, 578.0], [25.0, 578.0], [25.1, 579.0], [25.2, 579.0], [25.3, 579.0], [25.4, 579.0], [25.5, 579.0], [25.6, 579.0], [25.7, 579.0], [25.8, 579.0], [25.9, 579.0], [26.0, 579.0], [26.1, 579.0], [26.2, 579.0], [26.3, 579.0], [26.4, 579.0], [26.5, 579.0], [26.6, 579.0], [26.7, 579.0], [26.8, 580.0], [26.9, 580.0], [27.0, 580.0], [27.1, 580.0], [27.2, 580.0], [27.3, 580.0], [27.4, 580.0], [27.5, 580.0], [27.6, 580.0], [27.7, 580.0], [27.8, 581.0], [27.9, 581.0], [28.0, 581.0], [28.1, 581.0], [28.2, 581.0], [28.3, 581.0], [28.4, 581.0], [28.5, 581.0], [28.6, 581.0], [28.7, 581.0], [28.8, 581.0], [28.9, 581.0], [29.0, 581.0], [29.1, 581.0], [29.2, 581.0], [29.3, 581.0], [29.4, 581.0], [29.5, 581.0], [29.6, 581.0], [29.7, 582.0], [29.8, 582.0], [29.9, 582.0], [30.0, 582.0], [30.1, 582.0], [30.2, 582.0], [30.3, 582.0], [30.4, 582.0], [30.5, 582.0], [30.6, 582.0], [30.7, 582.0], [30.8, 582.0], [30.9, 582.0], [31.0, 582.0], [31.1, 582.0], [31.2, 582.0], [31.3, 582.0], [31.4, 582.0], [31.5, 582.0], [31.6, 582.0], [31.7, 582.0], [31.8, 583.0], [31.9, 583.0], [32.0, 583.0], [32.1, 583.0], [32.2, 583.0], [32.3, 583.0], [32.4, 583.0], [32.5, 583.0], [32.6, 583.0], [32.7, 583.0], [32.8, 583.0], [32.9, 583.0], [33.0, 583.0], [33.1, 583.0], [33.2, 583.0], [33.3, 583.0], [33.4, 583.0], [33.5, 583.0], [33.6, 583.0], [33.7, 583.0], [33.8, 583.0], [33.9, 583.0], [34.0, 583.0], [34.1, 583.0], [34.2, 584.0], [34.3, 584.0], [34.4, 584.0], [34.5, 584.0], [34.6, 584.0], [34.7, 584.0], [34.8, 584.0], [34.9, 584.0], [35.0, 584.0], [35.1, 584.0], [35.2, 584.0], [35.3, 584.0], [35.4, 584.0], [35.5, 584.0], [35.6, 584.0], [35.7, 584.0], [35.8, 584.0], [35.9, 584.0], [36.0, 584.0], [36.1, 584.0], [36.2, 584.0], [36.3, 584.0], [36.4, 584.0], [36.5, 584.0], [36.6, 584.0], [36.7, 584.0], [36.8, 584.0], [36.9, 584.0], [37.0, 584.0], [37.1, 584.0], [37.2, 584.0], [37.3, 584.0], [37.4, 585.0], [37.5, 585.0], [37.6, 585.0], [37.7, 585.0], [37.8, 585.0], [37.9, 585.0], [38.0, 585.0], [38.1, 585.0], [38.2, 585.0], [38.3, 585.0], [38.4, 585.0], [38.5, 585.0], [38.6, 585.0], [38.7, 585.0], [38.8, 585.0], [38.9, 585.0], [39.0, 585.0], [39.1, 585.0], [39.2, 585.0], [39.3, 585.0], [39.4, 585.0], [39.5, 585.0], [39.6, 585.0], [39.7, 585.0], [39.8, 585.0], [39.9, 585.0], [40.0, 585.0], [40.1, 585.0], [40.2, 585.0], [40.3, 585.0], [40.4, 585.0], [40.5, 585.0], [40.6, 585.0], [40.7, 585.0], [40.8, 585.0], [40.9, 585.0], [41.0, 585.0], [41.1, 585.0], [41.2, 585.0], [41.3, 585.0], [41.4, 585.0], [41.5, 585.0], [41.6, 586.0], [41.7, 586.0], [41.8, 586.0], [41.9, 586.0], [42.0, 586.0], [42.1, 586.0], [42.2, 586.0], [42.3, 586.0], [42.4, 586.0], [42.5, 586.0], [42.6, 586.0], [42.7, 586.0], [42.8, 586.0], [42.9, 586.0], [43.0, 586.0], [43.1, 586.0], [43.2, 586.0], [43.3, 586.0], [43.4, 586.0], [43.5, 586.0], [43.6, 586.0], [43.7, 586.0], [43.8, 586.0], [43.9, 586.0], [44.0, 586.0], [44.1, 586.0], [44.2, 586.0], [44.3, 586.0], [44.4, 586.0], [44.5, 586.0], [44.6, 586.0], [44.7, 587.0], [44.8, 587.0], [44.9, 587.0], [45.0, 587.0], [45.1, 587.0], [45.2, 587.0], [45.3, 587.0], [45.4, 587.0], [45.5, 587.0], [45.6, 587.0], [45.7, 587.0], [45.8, 587.0], [45.9, 587.0], [46.0, 587.0], [46.1, 587.0], [46.2, 587.0], [46.3, 587.0], [46.4, 587.0], [46.5, 587.0], [46.6, 587.0], [46.7, 587.0], [46.8, 587.0], [46.9, 587.0], [47.0, 587.0], [47.1, 587.0], [47.2, 587.0], [47.3, 587.0], [47.4, 587.0], [47.5, 587.0], [47.6, 587.0], [47.7, 587.0], [47.8, 587.0], [47.9, 587.0], [48.0, 587.0], [48.1, 587.0], [48.2, 588.0], [48.3, 588.0], [48.4, 588.0], [48.5, 588.0], [48.6, 588.0], [48.7, 588.0], [48.8, 588.0], [48.9, 588.0], [49.0, 588.0], [49.1, 588.0], [49.2, 588.0], [49.3, 588.0], [49.4, 588.0], [49.5, 588.0], [49.6, 588.0], [49.7, 588.0], [49.8, 588.0], [49.9, 588.0], [50.0, 588.0], [50.1, 588.0], [50.2, 588.0], [50.3, 588.0], [50.4, 588.0], [50.5, 588.0], [50.6, 588.0], [50.7, 588.0], [50.8, 588.0], [50.9, 588.0], [51.0, 588.0], [51.1, 588.0], [51.2, 588.0], [51.3, 588.0], [51.4, 588.0], [51.5, 588.0], [51.6, 588.0], [51.7, 588.0], [51.8, 589.0], [51.9, 589.0], [52.0, 589.0], [52.1, 589.0], [52.2, 589.0], [52.3, 589.0], [52.4, 589.0], [52.5, 589.0], [52.6, 589.0], [52.7, 589.0], [52.8, 589.0], [52.9, 589.0], [53.0, 589.0], [53.1, 589.0], [53.2, 589.0], [53.3, 589.0], [53.4, 589.0], [53.5, 589.0], [53.6, 589.0], [53.7, 589.0], [53.8, 589.0], [53.9, 589.0], [54.0, 589.0], [54.1, 589.0], [54.2, 589.0], [54.3, 589.0], [54.4, 589.0], [54.5, 589.0], [54.6, 589.0], [54.7, 589.0], [54.8, 589.0], [54.9, 589.0], [55.0, 589.0], [55.1, 589.0], [55.2, 589.0], [55.3, 589.0], [55.4, 590.0], [55.5, 590.0], [55.6, 590.0], [55.7, 590.0], [55.8, 590.0], [55.9, 590.0], [56.0, 590.0], [56.1, 590.0], [56.2, 590.0], [56.3, 590.0], [56.4, 590.0], [56.5, 590.0], [56.6, 590.0], [56.7, 590.0], [56.8, 590.0], [56.9, 590.0], [57.0, 590.0], [57.1, 590.0], [57.2, 590.0], [57.3, 590.0], [57.4, 590.0], [57.5, 590.0], [57.6, 590.0], [57.7, 590.0], [57.8, 590.0], [57.9, 590.0], [58.0, 590.0], [58.1, 590.0], [58.2, 590.0], [58.3, 590.0], [58.4, 590.0], [58.5, 590.0], [58.6, 590.0], [58.7, 590.0], [58.8, 590.0], [58.9, 590.0], [59.0, 590.0], [59.1, 590.0], [59.2, 590.0], [59.3, 590.0], [59.4, 591.0], [59.5, 591.0], [59.6, 591.0], [59.7, 591.0], [59.8, 591.0], [59.9, 591.0], [60.0, 591.0], [60.1, 591.0], [60.2, 591.0], [60.3, 591.0], [60.4, 591.0], [60.5, 591.0], [60.6, 591.0], [60.7, 591.0], [60.8, 591.0], [60.9, 591.0], [61.0, 591.0], [61.1, 591.0], [61.2, 591.0], [61.3, 591.0], [61.4, 591.0], [61.5, 591.0], [61.6, 591.0], [61.7, 591.0], [61.8, 591.0], [61.9, 591.0], [62.0, 591.0], [62.1, 591.0], [62.2, 591.0], [62.3, 591.0], [62.4, 591.0], [62.5, 591.0], [62.6, 591.0], [62.7, 591.0], [62.8, 591.0], [62.9, 591.0], [63.0, 591.0], [63.1, 591.0], [63.2, 592.0], [63.3, 592.0], [63.4, 592.0], [63.5, 592.0], [63.6, 592.0], [63.7, 592.0], [63.8, 592.0], [63.9, 592.0], [64.0, 592.0], [64.1, 592.0], [64.2, 592.0], [64.3, 592.0], [64.4, 592.0], [64.5, 592.0], [64.6, 592.0], [64.7, 592.0], [64.8, 592.0], [64.9, 592.0], [65.0, 592.0], [65.1, 592.0], [65.2, 592.0], [65.3, 592.0], [65.4, 592.0], [65.5, 592.0], [65.6, 592.0], [65.7, 592.0], [65.8, 592.0], [65.9, 592.0], [66.0, 592.0], [66.1, 592.0], [66.2, 592.0], [66.3, 592.0], [66.4, 592.0], [66.5, 592.0], [66.6, 592.0], [66.7, 592.0], [66.8, 592.0], [66.9, 592.0], [67.0, 593.0], [67.1, 593.0], [67.2, 593.0], [67.3, 593.0], [67.4, 593.0], [67.5, 593.0], [67.6, 593.0], [67.7, 593.0], [67.8, 593.0], [67.9, 593.0], [68.0, 593.0], [68.1, 593.0], [68.2, 593.0], [68.3, 593.0], [68.4, 593.0], [68.5, 593.0], [68.6, 593.0], [68.7, 593.0], [68.8, 593.0], [68.9, 593.0], [69.0, 593.0], [69.1, 593.0], [69.2, 593.0], [69.3, 593.0], [69.4, 593.0], [69.5, 593.0], [69.6, 593.0], [69.7, 593.0], [69.8, 593.0], [69.9, 593.0], [70.0, 593.0], [70.1, 593.0], [70.2, 593.0], [70.3, 593.0], [70.4, 593.0], [70.5, 593.0], [70.6, 593.0], [70.7, 593.0], [70.8, 593.0], [70.9, 593.0], [71.0, 593.0], [71.1, 593.0], [71.2, 593.0], [71.3, 593.0], [71.4, 593.0], [71.5, 593.0], [71.6, 594.0], [71.7, 594.0], [71.8, 594.0], [71.9, 594.0], [72.0, 594.0], [72.1, 594.0], [72.2, 594.0], [72.3, 594.0], [72.4, 594.0], [72.5, 594.0], [72.6, 594.0], [72.7, 594.0], [72.8, 594.0], [72.9, 594.0], [73.0, 594.0], [73.1, 594.0], [73.2, 594.0], [73.3, 594.0], [73.4, 594.0], [73.5, 594.0], [73.6, 594.0], [73.7, 594.0], [73.8, 594.0], [73.9, 594.0], [74.0, 594.0], [74.1, 594.0], [74.2, 594.0], [74.3, 594.0], [74.4, 594.0], [74.5, 594.0], [74.6, 594.0], [74.7, 595.0], [74.8, 595.0], [74.9, 595.0], [75.0, 595.0], [75.1, 595.0], [75.2, 595.0], [75.3, 595.0], [75.4, 595.0], [75.5, 595.0], [75.6, 595.0], [75.7, 595.0], [75.8, 595.0], [75.9, 595.0], [76.0, 595.0], [76.1, 595.0], [76.2, 595.0], [76.3, 595.0], [76.4, 595.0], [76.5, 595.0], [76.6, 595.0], [76.7, 595.0], [76.8, 595.0], [76.9, 595.0], [77.0, 595.0], [77.1, 595.0], [77.2, 595.0], [77.3, 595.0], [77.4, 595.0], [77.5, 595.0], [77.6, 596.0], [77.7, 596.0], [77.8, 596.0], [77.9, 596.0], [78.0, 596.0], [78.1, 596.0], [78.2, 596.0], [78.3, 596.0], [78.4, 596.0], [78.5, 596.0], [78.6, 596.0], [78.7, 596.0], [78.8, 596.0], [78.9, 596.0], [79.0, 596.0], [79.1, 596.0], [79.2, 596.0], [79.3, 596.0], [79.4, 596.0], [79.5, 596.0], [79.6, 596.0], [79.7, 596.0], [79.8, 596.0], [79.9, 596.0], [80.0, 596.0], [80.1, 596.0], [80.2, 596.0], [80.3, 596.0], [80.4, 596.0], [80.5, 596.0], [80.6, 596.0], [80.7, 596.0], [80.8, 596.0], [80.9, 596.0], [81.0, 597.0], [81.1, 597.0], [81.2, 597.0], [81.3, 597.0], [81.4, 597.0], [81.5, 597.0], [81.6, 597.0], [81.7, 597.0], [81.8, 597.0], [81.9, 597.0], [82.0, 597.0], [82.1, 597.0], [82.2, 597.0], [82.3, 597.0], [82.4, 597.0], [82.5, 597.0], [82.6, 597.0], [82.7, 597.0], [82.8, 597.0], [82.9, 597.0], [83.0, 597.0], [83.1, 597.0], [83.2, 598.0], [83.3, 598.0], [83.4, 598.0], [83.5, 598.0], [83.6, 598.0], [83.7, 598.0], [83.8, 598.0], [83.9, 598.0], [84.0, 598.0], [84.1, 598.0], [84.2, 598.0], [84.3, 598.0], [84.4, 598.0], [84.5, 598.0], [84.6, 598.0], [84.7, 598.0], [84.8, 599.0], [84.9, 599.0], [85.0, 599.0], [85.1, 599.0], [85.2, 599.0], [85.3, 599.0], [85.4, 599.0], [85.5, 599.0], [85.6, 599.0], [85.7, 599.0], [85.8, 599.0], [85.9, 599.0], [86.0, 599.0], [86.1, 599.0], [86.2, 599.0], [86.3, 599.0], [86.4, 599.0], [86.5, 599.0], [86.6, 599.0], [86.7, 599.0], [86.8, 599.0], [86.9, 599.0], [87.0, 600.0], [87.1, 600.0], [87.2, 600.0], [87.3, 600.0], [87.4, 600.0], [87.5, 600.0], [87.6, 600.0], [87.7, 600.0], [87.8, 600.0], [87.9, 600.0], [88.0, 600.0], [88.1, 600.0], [88.2, 600.0], [88.3, 600.0], [88.4, 600.0], [88.5, 600.0], [88.6, 600.0], [88.7, 600.0], [88.8, 600.0], [88.9, 600.0], [89.0, 601.0], [89.1, 601.0], [89.2, 601.0], [89.3, 601.0], [89.4, 601.0], [89.5, 601.0], [89.6, 601.0], [89.7, 601.0], [89.8, 601.0], [89.9, 601.0], [90.0, 601.0], [90.1, 601.0], [90.2, 601.0], [90.3, 601.0], [90.4, 602.0], [90.5, 602.0], [90.6, 602.0], [90.7, 602.0], [90.8, 602.0], [90.9, 602.0], [91.0, 602.0], [91.1, 602.0], [91.2, 602.0], [91.3, 602.0], [91.4, 602.0], [91.5, 603.0], [91.6, 603.0], [91.7, 603.0], [91.8, 603.0], [91.9, 603.0], [92.0, 603.0], [92.1, 603.0], [92.2, 603.0], [92.3, 604.0], [92.4, 604.0], [92.5, 604.0], [92.6, 604.0], [92.7, 604.0], [92.8, 604.0], [92.9, 605.0], [93.0, 605.0], [93.1, 605.0], [93.2, 605.0], [93.3, 605.0], [93.4, 606.0], [93.5, 606.0], [93.6, 606.0], [93.7, 606.0], [93.8, 606.0], [93.9, 606.0], [94.0, 607.0], [94.1, 607.0], [94.2, 608.0], [94.3, 608.0], [94.4, 608.0], [94.5, 608.0], [94.6, 609.0], [94.7, 609.0], [94.8, 609.0], [94.9, 610.0], [95.0, 611.0], [95.1, 612.0], [95.2, 613.0], [95.3, 613.0], [95.4, 614.0], [95.5, 614.0], [95.6, 614.0], [95.7, 616.0], [95.8, 619.0], [95.9, 621.0], [96.0, 623.0], [96.1, 627.0], [96.2, 627.0], [96.3, 637.0], [96.4, 640.0], [96.5, 642.0], [96.6, 648.0], [96.7, 650.0], [96.8, 650.0], [96.9, 654.0], [97.0, 656.0], [97.1, 667.0], [97.2, 670.0], [97.3, 678.0], [97.4, 681.0], [97.5, 683.0], [97.6, 685.0], [97.7, 688.0], [97.8, 692.0], [97.9, 704.0], [98.0, 711.0], [98.1, 749.0], [98.2, 752.0], [98.3, 763.0], [98.4, 784.0], [98.5, 803.0], [98.6, 809.0], [98.7, 824.0], [98.8, 835.0], [98.9, 853.0], [99.0, 861.0], [99.1, 916.0], [99.2, 1133.0], [99.3, 1390.0], [99.4, 1422.0], [99.5, 1617.0], [99.6, 1736.0], [99.7, 2313.0], [99.8, 2353.0], [99.9, 3555.0], [100.0, 3767.0]], "isOverall": false, "label": "BookAPI", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 2175.0, "series": [{"data": [[2100.0, 1.0], [2200.0, 1.0], [2300.0, 3.0], [600.0, 272.0], [2400.0, 1.0], [700.0, 14.0], [2700.0, 1.0], [800.0, 15.0], [3500.0, 1.0], [900.0, 3.0], [3700.0, 2.0], [1100.0, 2.0], [1200.0, 1.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 2.0], [1600.0, 1.0], [1700.0, 2.0], [500.0, 2175.0]], "isOverall": false, "label": "BookAPI", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 15.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2485.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2485.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.9926470588235294, "minX": 1.6610241E12, "maxY": 2.451807228915663, "series": [{"data": [[1.66102452E12, 2.0], [1.66102422E12, 2.0], [1.66102416E12, 2.0180722891566254], [1.66102482E12, 2.107784431137725], [1.66102428E12, 2.0], [1.66102494E12, 2.047904191616766], [1.66102488E12, 2.451807228915663], [1.66102458E12, 2.0], [1.661025E12, 1.9926470588235294], [1.6610247E12, 2.0], [1.66102464E12, 2.0059880239520944], [1.66102434E12, 2.0059880239520935], [1.66102476E12, 2.0], [1.66102446E12, 2.0], [1.6610244E12, 2.0421686746987944], [1.6610241E12, 2.290322580645161]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.661025E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 587.5085995086008, "minX": 1.0, "maxY": 3117.5, "series": [{"data": [[2.0, 587.5085995086008], [4.0, 1038.8333333333335], [8.0, 3117.5], [1.0, 599.0], [5.0, 1431.3333333333335], [3.0, 911.6060606060607], [6.0, 2347.6666666666665], [7.0, 1908.2857142857144]], "isOverall": false, "label": "BookAPI", "isController": false}, {"data": [[2.0484000000000004, 602.734000000001]], "isOverall": false, "label": "BookAPI-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 67.68333333333334, "minX": 1.6610241E12, "maxY": 13254.233333333334, "series": [{"data": [[1.66102452E12, 13174.866666666667], [1.66102422E12, 13254.233333333334], [1.66102416E12, 13174.866666666667], [1.66102482E12, 13254.233333333334], [1.66102428E12, 13254.233333333334], [1.66102494E12, 13254.233333333334], [1.66102488E12, 13174.866666666667], [1.66102458E12, 13254.233333333334], [1.661025E12, 10793.866666666667], [1.6610247E12, 13174.866666666667], [1.66102464E12, 13254.233333333334], [1.66102434E12, 13254.233333333334], [1.66102476E12, 13254.233333333334], [1.66102446E12, 13254.233333333334], [1.6610244E12, 13174.866666666667], [1.6610241E12, 2460.366666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66102452E12, 362.43333333333334], [1.66102422E12, 364.6166666666667], [1.66102416E12, 362.43333333333334], [1.66102482E12, 364.6166666666667], [1.66102428E12, 364.6166666666667], [1.66102494E12, 364.6166666666667], [1.66102488E12, 362.43333333333334], [1.66102458E12, 364.6166666666667], [1.661025E12, 296.93333333333334], [1.6610247E12, 362.43333333333334], [1.66102464E12, 364.6166666666667], [1.66102434E12, 364.6166666666667], [1.66102476E12, 364.6166666666667], [1.66102446E12, 364.6166666666667], [1.6610244E12, 362.43333333333334], [1.6610241E12, 67.68333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.661025E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 582.9338235294116, "minX": 1.6610241E12, "maxY": 745.1445783132534, "series": [{"data": [[1.66102452E12, 584.0361445783134], [1.66102422E12, 584.3353293413177], [1.66102416E12, 592.7891566265057], [1.66102482E12, 619.0179640718562], [1.66102428E12, 587.2574850299403], [1.66102494E12, 604.2874251497008], [1.66102488E12, 745.1445783132534], [1.66102458E12, 587.3353293413176], [1.661025E12, 582.9338235294116], [1.6610247E12, 588.5421686746986], [1.66102464E12, 585.4550898203595], [1.66102434E12, 590.5748502994013], [1.66102476E12, 586.4670658682631], [1.66102446E12, 589.4910179640718], [1.6610244E12, 602.6385542168675], [1.6610241E12, 643.8064516129033]], "isOverall": false, "label": "BookAPI", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.661025E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 582.9264705882349, "minX": 1.6610241E12, "maxY": 745.1445783132534, "series": [{"data": [[1.66102452E12, 584.0301204819273], [1.66102422E12, 584.2874251497007], [1.66102416E12, 592.7771084337346], [1.66102482E12, 618.9999999999997], [1.66102428E12, 587.2275449101795], [1.66102494E12, 604.2754491017969], [1.66102488E12, 745.1445783132534], [1.66102458E12, 587.3113772455089], [1.661025E12, 582.9264705882349], [1.6610247E12, 588.5240963855422], [1.66102464E12, 585.4311377245509], [1.66102434E12, 590.5389221556885], [1.66102476E12, 586.4550898203593], [1.66102446E12, 589.4670658682641], [1.6610244E12, 602.5963855421688], [1.6610241E12, 643.4193548387098]], "isOverall": false, "label": "BookAPI", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.661025E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 386.889705882353, "minX": 1.6610241E12, "maxY": 498.3192771084339, "series": [{"data": [[1.66102452E12, 387.4036144578313], [1.66102422E12, 388.14970059880255], [1.66102416E12, 394.1807228915664], [1.66102482E12, 414.7724550898203], [1.66102428E12, 390.0359281437124], [1.66102494E12, 400.01796407185634], [1.66102488E12, 498.3192771084339], [1.66102458E12, 390.82634730538933], [1.661025E12, 386.889705882353], [1.6610247E12, 392.012048192771], [1.66102464E12, 387.58682634730513], [1.66102434E12, 393.87425149700624], [1.66102476E12, 389.6467065868263], [1.66102446E12, 393.0119760479043], [1.6610244E12, 398.87951807228916], [1.6610241E12, 441.80645161290323]], "isOverall": false, "label": "BookAPI", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.661025E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 560.0, "minX": 1.6610241E12, "maxY": 3767.0, "series": [{"data": [[1.66102452E12, 608.0], [1.66102422E12, 650.0], [1.66102416E12, 835.0], [1.66102482E12, 1392.0], [1.66102428E12, 659.0], [1.66102494E12, 2349.0], [1.66102488E12, 3767.0], [1.66102458E12, 657.0], [1.661025E12, 605.0], [1.6610247E12, 627.0], [1.66102464E12, 853.0], [1.66102434E12, 859.0], [1.66102476E12, 648.0], [1.66102446E12, 684.0], [1.6610244E12, 824.0], [1.6610241E12, 1422.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66102452E12, 597.0], [1.66102422E12, 596.0], [1.66102416E12, 602.0], [1.66102482E12, 716.4000000000002], [1.66102428E12, 599.0], [1.66102494E12, 600.0], [1.66102488E12, 821.500000000005], [1.66102458E12, 600.0], [1.661025E12, 594.0], [1.6610247E12, 600.3], [1.66102464E12, 598.0], [1.66102434E12, 603.2], [1.66102476E12, 600.0], [1.66102446E12, 603.0], [1.6610244E12, 678.3], [1.6610241E12, 843.2000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66102452E12, 608.0], [1.66102422E12, 636.3999999999999], [1.66102416E12, 820.9300000000003], [1.66102482E12, 1092.799999999997], [1.66102428E12, 655.5999999999999], [1.66102494E12, 1926.7199999999957], [1.66102488E12, 3728.810000000001], [1.66102458E12, 636.5999999999998], [1.661025E12, 603.89], [1.6610247E12, 615.6100000000002], [1.66102464E12, 692.5199999999984], [1.66102434E12, 692.3999999999983], [1.66102476E12, 643.24], [1.66102446E12, 664.2799999999997], [1.6610244E12, 811.2700000000002], [1.6610241E12, 1422.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66102452E12, 601.3], [1.66102422E12, 601.6], [1.66102416E12, 622.1000000000001], [1.66102482E12, 826.1999999999999], [1.66102428E12, 608.5999999999999], [1.66102494E12, 604.0], [1.66102488E12, 2255.7500000000005], [1.66102458E12, 603.0], [1.661025E12, 599.15], [1.6610247E12, 604.0], [1.66102464E12, 600.0], [1.66102434E12, 608.6], [1.66102476E12, 605.6], [1.66102446E12, 607.2], [1.6610244E12, 706.1000000000001], [1.6610241E12, 1320.5999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66102452E12, 561.0], [1.66102422E12, 563.0], [1.66102416E12, 566.0], [1.66102482E12, 564.0], [1.66102428E12, 563.0], [1.66102494E12, 565.0], [1.66102488E12, 561.0], [1.66102458E12, 563.0], [1.661025E12, 561.0], [1.6610247E12, 563.0], [1.66102464E12, 561.0], [1.66102434E12, 568.0], [1.66102476E12, 560.0], [1.66102446E12, 566.0], [1.6610244E12, 561.0], [1.6610241E12, 567.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66102452E12, 586.0], [1.66102422E12, 587.0], [1.66102416E12, 589.0], [1.66102482E12, 593.0], [1.66102428E12, 588.0], [1.66102494E12, 588.0], [1.66102488E12, 589.5], [1.66102458E12, 588.0], [1.661025E12, 585.0], [1.6610247E12, 590.0], [1.66102464E12, 586.0], [1.66102434E12, 590.0], [1.66102476E12, 586.0], [1.66102446E12, 589.0], [1.6610244E12, 589.0], [1.6610241E12, 587.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.661025E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 587.0, "minX": 1.0, "maxY": 1587.0, "series": [{"data": [[2.0, 587.0], [4.0, 642.0], [1.0, 990.5], [6.0, 752.0], [3.0, 588.0], [7.0, 1587.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 587.0, "minX": 1.0, "maxY": 1587.0, "series": [{"data": [[2.0, 587.0], [4.0, 642.0], [1.0, 990.5], [6.0, 750.0], [3.0, 588.0], [7.0, 1587.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.6610241E12, "maxY": 2.783333333333333, "series": [{"data": [[1.66102452E12, 2.783333333333333], [1.66102422E12, 2.783333333333333], [1.66102416E12, 2.783333333333333], [1.66102482E12, 2.7666666666666666], [1.66102428E12, 2.7666666666666666], [1.66102494E12, 2.783333333333333], [1.66102488E12, 2.783333333333333], [1.66102458E12, 2.783333333333333], [1.661025E12, 2.2333333333333334], [1.6610247E12, 2.783333333333333], [1.66102464E12, 2.7666666666666666], [1.66102434E12, 2.783333333333333], [1.66102476E12, 2.783333333333333], [1.66102446E12, 2.7666666666666666], [1.6610244E12, 2.783333333333333], [1.6610241E12, 0.5333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.661025E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.6610241E12, "maxY": 2.783333333333333, "series": [{"data": [[1.66102452E12, 2.7666666666666666], [1.66102422E12, 2.783333333333333], [1.66102416E12, 2.7666666666666666], [1.66102482E12, 2.783333333333333], [1.66102428E12, 2.783333333333333], [1.66102494E12, 2.783333333333333], [1.66102488E12, 2.7666666666666666], [1.66102458E12, 2.783333333333333], [1.661025E12, 2.2666666666666666], [1.6610247E12, 2.7666666666666666], [1.66102464E12, 2.783333333333333], [1.66102434E12, 2.783333333333333], [1.66102476E12, 2.783333333333333], [1.66102446E12, 2.783333333333333], [1.6610244E12, 2.7666666666666666], [1.6610241E12, 0.5166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.661025E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.6610241E12, "maxY": 2.783333333333333, "series": [{"data": [[1.66102452E12, 2.7666666666666666], [1.66102422E12, 2.783333333333333], [1.66102416E12, 2.7666666666666666], [1.66102482E12, 2.783333333333333], [1.66102428E12, 2.783333333333333], [1.66102494E12, 2.783333333333333], [1.66102488E12, 2.7666666666666666], [1.66102458E12, 2.783333333333333], [1.661025E12, 2.2666666666666666], [1.6610247E12, 2.7666666666666666], [1.66102464E12, 2.783333333333333], [1.66102434E12, 2.783333333333333], [1.66102476E12, 2.783333333333333], [1.66102446E12, 2.783333333333333], [1.6610244E12, 2.7666666666666666], [1.6610241E12, 0.5166666666666667]], "isOverall": false, "label": "BookAPI-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.661025E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.6610241E12, "maxY": 2.783333333333333, "series": [{"data": [[1.66102452E12, 2.7666666666666666], [1.66102422E12, 2.783333333333333], [1.66102416E12, 2.7666666666666666], [1.66102482E12, 2.783333333333333], [1.66102428E12, 2.783333333333333], [1.66102494E12, 2.783333333333333], [1.66102488E12, 2.7666666666666666], [1.66102458E12, 2.783333333333333], [1.661025E12, 2.2666666666666666], [1.6610247E12, 2.7666666666666666], [1.66102464E12, 2.783333333333333], [1.66102434E12, 2.783333333333333], [1.66102476E12, 2.783333333333333], [1.66102446E12, 2.783333333333333], [1.6610244E12, 2.7666666666666666], [1.6610241E12, 0.5166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.661025E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

