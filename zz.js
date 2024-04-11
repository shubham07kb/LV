function() {
	var url = 'https://raw.githubusercontent.com/shubham07kb/LV/main/irv.csv';
    var blogPath = '/blog';
	if(window.content_n_conversion_request_init !== 'init') {
	    window.content_n_conversion_request_init = 'init';
        window.dataLayer = window.dataLayer || [];
        window.content_group = 'default';
	    return fetch(url)
	    	.then(function(response) {
	    		if (!response.ok) {
		    	    window.dataLayer.push({event: 'content_group_set'});
	    		}
	    		return response.text();
	    	})
	    	.then(function(data) {
	    		var lines = data.split('\n');
                var currentPath = window.location.hostname + window.location.pathname.replace(/\/$/, '');
                for (var i = 1; i < lines.length; i++) {
                    if (lines[i].trim() !== '') {
                        var currentLine = lines[i].split(',');
                        var path = new URL(currentLine[2].trim());
                        var path = path.hostname + path.pathname.replace(/\/$/, '');
                        if (currentPath === path) {
                            var group = currentLine[1].trim();
                            if (currentLine[0].trim() === 'conversion') {
                                window.conversion = group;
                                window.conversion_label = group.charAt(0).toUpperCase() + group.slice(1);
                                window.dataLayer.push({event: 'conversion_set'});
                            } else if (currentLine[0].trim() === 'content-group') {
                                window.content_group = group;
                            } else if (new RegExp('^' + window.location.hostname + blogPath).test(currentPath)) {
                                window.content_group = 'blog';
                            }
                            window.dataLayer.push({event: 'content_group_set'});
                            break;
                        }
                    }
                }
		    })
		    .catch(function(error) {
		    	window.dataLayer.push({event: 'content_group_set'});
		    });
	}
    return window.content_group;
}