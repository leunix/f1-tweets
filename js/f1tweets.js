	$(document).ready(function(){

		updateBrawnGP(0, '%23F1', '', 1);

		$('#f1').click(function(){
			updateBrawnGP(0, '%23F1');
		});
		$('#mclaren').click(function(){
			updateBrawnGP(0, 'mclaren');
		});
		$('#lewis').click(function(){
			updateBrawnGP(0, 'Lewis Hamilton');
		});
		$('#hekki').click(function(){
			updateBrawnGP(0, 'Heikki Kovalainen');
		});
		$('#ferrari').click(function(){
			updateBrawnGP(0, 'Ferrari');
		});
		$('#felipe').click(function(){
			updateBrawnGP(0, 'Felipe Massa');
		});
		$('#kimi').click(function(){
			updateBrawnGP(0, 'Kimi Raikkonen');
		});
		$('#bmw').click(function(){
			updateBrawnGP(0, 'BMW Sauber');
		});
		$('#robert').click(function(){
			updateBrawnGP(0, 'Robert Kubica');
		});
		$('#nick').click(function(){
			updateBrawnGP(0, 'Nick Heidfeld');
		});
		$('#renault').click(function(){
			updateBrawnGP(0, 'Renault');
		});
		$('#fernando').click(function(){
			updateBrawnGP(0, 'Fernando Alonso');
		});
		$('#nelson').click(function(){
			updateBrawnGP(0, 'Nelson Piquet');
		});
		$('#toyota').click(function(){
			updateBrawnGP(0, 'Toyota');
		});
		$('#jarno').click(function(){
			updateBrawnGP(0, 'Jarno Trulli');
		});
		$('#timo').click(function(){
			updateBrawnGP(0, 'Timo Glock');
		});
		$('#toro').click(function(){
			updateBrawnGP(0, 'Toro Rosso');
		});
		$('#bourdais').click(function(){
			updateBrawnGP(0, 'Sebastien Bourdais');
		});
		$('#buemi').click(function(){
			updateBrawnGP(0, 'Sebastien Buemi');
		});
		$('#redbull').click(function(){
			updateBrawnGP(0, 'Red Bull');
		});
		$('#mark').click(function(){
			updateBrawnGP(0, 'Mark Webber');
		});
		$('#vettel').click(function(){
			updateBrawnGP(0, 'Sebastian Vettel');
		});
		$('#williams').click(function(){
			updateBrawnGP(0, 'Williams');
		});
		$('#nico').click(function(){
			updateBrawnGP(0, 'Nico Rosberg');
		});
		$('#kazuki').click(function(){
			updateBrawnGP(0, 'Kazuki Nakajima');
		});
		$('#force').click(function(){
			updateBrawnGP(0, 'Force India');
		});
		$('#adrian').click(function(){
			updateBrawnGP(0, 'Adrian Sutil');
		});
		$('#giancarlo').click(function(){
			updateBrawnGP(0, 'Giancarlo Fisichella');
		});
		$('#brawn').click(function(){
			updateBrawnGP(0, 'Brawn GP');
		});
		$('#jenson').click(function(){
			updateBrawnGP(0, 'Jenson Button');
		});
		$('#rubens').click(function(){
			updateBrawnGP(0, 'Rubens Barrichello');
		});
		
		/* Function From RemySharp (http://remysharp.com/2007/05/18/add-twitter-to-your-blog-step-by-step/) */
		function linkify(s) {
	        var entities = {
	            '"' : '&quot;',
	            '&' : '&amp;',
	            '<' : '&lt;',
	            '>' : '&gt;'
	        };

	        return s.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g, function(m) {
	            return m.link(m);
	        }).replace(/(^|[^\w])(@[\d\w\-]+)/g, function(d, m1, m2) {
	            return m1 + '@<a href="http://twitter.com/' + m2.substr(1) + '">' + m2.substr(1) + '</a>';
	        }).replace(/"&<>/, function (m) {
	            return entities[m];
	        });
	    }


		function getBrawnGPId()
		{
			var gettheid = updateBrawnGP();
		
			return gettheid;
		}
		
		function showmethemoney(last_id, search_term)
		{
		
			var $timer = setTimeout(function(){updateBrawnGP(last_id, search_term,$timer,0);},10000);
		}
		
		function updateBrawnGP(last_id, search_term,timer, orderswitch)
		{
	
			
			clearTimeout(timer);
			
		
	
			$.getJSON("http://search.twitter.com/search.json?callback=?&since_id="+last_id+"&max_id=0&lang=en&q="+search_term+"", function(data){
				
				var $something = 0;
				
	
				$.each(data.results, function(i, item){
					
					var prepared_string = '@'+item.from_user+': '+item.text;
					
					var step_1_string=prepared_string.split(search_term).join('<span class="highlight">'+search_term+'</span>');
					var newstring = linkify(step_1_string);
					if(orderswitch == 1)
					{
						$('#tweet-feed').slideDown("slow")
										.append('<div class="tweet">'+newstring+'</div>');
					}
					else {
						$('#tweet-feed').slideDown("slow")
										.prepend('<div class="tweet">'+newstring+'</div>');						
					}

					if(i == 0)
					{
						$something = item.id;
					}
				
					setTimeout("",2000);
					
				});

				if($something != last_id && $something != 0)
				{
					showmethemoney($something,search_term);	
				
				}
				else if($something != last_id)
				{
					showmethemoney(last_id,search_term);
				
				}
				else if($something == last_id)
				{
					showmethemoney($something,search_term);
				
				}
				

			
				
				
			});
			
	
			
		}
		
	
	});