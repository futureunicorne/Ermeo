function NbPair(nb)
{
	if(nb / 2 == Math.round(nb / 2))
		return true;
	else
		return false;
}

var str = "A,B,C,D,E,F,G,H,I,J,K";
var i = 0;
var k = 0;
var t = ":true";
var f = ":false";
var tab = new Array();

while (i < str.length)
{
	if (NbPair(i) == true)
	{
		j = 0;
		while (j < str.length)
		{
			if (NbPair(j) == true)
			{
      			if (i == j)
					tab[k] = str[j].concat(t);
				else
					tab[k] = str[j].concat(f);
    		    k++;
			}
	     	else
		    {
	      		tab[k] = str[j];
	         	k++;
	      	}
			j++;
  		}
    	tab[k] = '\n';
    	k++;
	}
	i++;
}
str = tab.join( "" );