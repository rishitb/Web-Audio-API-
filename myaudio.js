var context = new webkitAudioContext();
var oscillator = context.createOscillator();
var gain = context.createGain();

oscillator.frequency.value = 200;
oscillator.connect(gain);
gain.connect(context.destination);
oscillator.start(0);
gain.gain.value=0;

//Filter
var osc2= context.createOscillator();
	biquadFilter = context.createBiquadFilter();
	gain2 = context.createGain();
	
osc2.frequency.value=250;
osc2.type='sine';
biquadFilter.type = 'lowpass';

osc2.connect(gain2);
gain2.connect(biquadFilter);
biquadFilter.connect(context.destination);

osc2.start(0);
gain2.gain.value=0;
 
function Play()
{
	oscillator.type='sine';
//console.log(Playing);
gain.gain.value=1;
}

function Pause()
{
	gain.gain.value=0;
}

 document.getElementById('freq').addEventListener('change', function (){
	oscillator.frequency.value = this.value;
  });
  
  document.getElementById('freq2').addEventListener('change', function (){
	osc2.frequency.value = this.value;
	console.log("Wave Freq: "+osc2.frequency.value);
  });
  
   document.getElementById('filterfreq').addEventListener('change', function (){
	biquadFilter.frequency.value = this.value;
	console.log("Filter Freq: "+biquadFilter.frequency.value);
  });

function oscWaveType()
{
	var mySelector=document.getElementById('oscWS');
	oscillator.type=mySelector.value;
}

function osc2WaveType()
{
	var mySelector=document.getElementById('osc2WS');
	osc2.type=mySelector.value;
}

function selectFilter()
{
	var mySelector=document.getElementById('osc2FS');
	biquadFilter.type=mySelector.value;
	console.log(biquadFilter.type);
}

function FilterIt()
{
	if(osc2)
	{
		if(biquadFilter)
		{
			if(gain2)
			{console.log("Alright");}
		}
	}
	gain2.gain.value=1;
}

function FilterStop()
{
	gain2.gain.value=0;
}