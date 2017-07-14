[mts]
NAME Dark
AUTHOR Tig0ti
EMAIL tig0ti@terra.es
DESCRIPTION Dark coloured theme
SCRIPT dark.mrc
WEBSITE http://fractalscript.com
MTSVERSION 1.1
VERSION 1.0
PREFIX 15¢
PARENTEXT 15(<text>15)
TIMESTAMP ON
TIMESTAMPFORMAT hh:nn
LOAD <pre> Black theme loaded
UNLOAD <pre> Black theme unloaded
CTCPSELF 15->14 ctcp <ctcp> <parentext>14 sent to <nick>
CTCPREPLYSELF 15->14 ctcpreply <ctcp> <parentext>14 sent to <nick>
MODE <pre> 14mode/15<chan>: <nick> sets mode 14<modes>
JOIN <pre> 14join/15<chan>: <nick> 15(<address>15)
JOINSELF <pre> 15you have joined 14<chan> 
PART <pre> 14part/15<chan>: <nick> 15(<address>15) <parentext>
TEXTCHAN 14<lt>14<cmode>15<nick>14<gt> <text>
TEXTQUERY 14<lt>15<nick>14<gt> <text>
KICK <pre> 14kick/15<chan>: <nick> kicked <knick> <parentext>
KICKSELF <pre> 14kick/15<chan>: <nick> kicked you! <parentext>
QUIT <pre> 14quit/15<chan>: <nick> 15(<address>15) <parentext>
TOPIC <pre> 14topic/15<chan>: <nick> changes topic <parentext>
NICK <pre> 14nick/15<chan>: <nick> is now known as <newnick>
TEXTCHANSELF 15<lt>15<cmode>14<me>15<gt> <text>
TEXTQUERYSELF 15<lt>14<me>15<gt> 15<text>
MODEUSER <pre> 14usermode/15: new modes 14<modes>
INVITE <- 14invite/15<chan>: from <nick>
NICKSELF <pre> 14nick/15: you're now known as <newnick>
ACTIONCHAN * 14<cmode>15<nick> <text>
ACTIONQUERY * <nick> <text>
ACTIONCHANSELF * 15<cmode>14<me> <text>
ACTIONQUERYSELF * <me> <text>
CTCP CTCP <ctcp> <parentext> from <nick>
CTCPCHAN CTCP <ctcp> <parentext> from <nick> (<chan>)
CTCPREPLY CTCPREPLY <ctcp> <parentext> from <nick> (<chan>)
SERVERERROR <pre> error <parentext>
NOTICESERVER <pre> snotice: 14<text>
NOTICE NOTICE 14<lt>15<nick>14<gt> <text>
NOTICECHAN NOTICE (<chan>) 14<lt>15<nick>14<gt> <text>
NOTICESELF <pre> Notice sent to 14<nick>: <text>
NOTICESELFCHAN <pre> Notice sent to 14<chan>: <text>
NOTIFY <pre> notify online: 15<nick>
UNOTIFY <pre> unotify offline: 15<nick>
DNS <pre> dns: resolving 15<address>
DNSERROR <pre> dns: unable to resolve 15<iaddress> <naddress>
DNSRESOLVE <pre> dns: resolved 15<naddress> 14(15<iaddress>14) to 15<raddress>
COLORS 1,15,14,10,15,15,14,14,14,14,14,15,15,14,15,14,14,14,14,15,14,1,14,1,14,10
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208
FONTDEFAULT Verdana,10
FONTCHAN Verdana,10
FONTQUERY Verdana,10
raw.311 !script ¯whois.start %::nick %::address %::realname
raw.319 !script ¯whois.chans %::chan
raw.312 | 15server     : <wserver> (<serverinfo>)
raw.301 !script ¯whois.away
raw.317 !script ¯whois.idle %::idletime %::signontime
raw.318 |_____(15end whois)_______________________________
raw.313 | 15ircop        : yes
raw.251 <pre> There are 14<users> and 14<text> invisible in 14<value> servers,
raw.252 <pre> 14<value> IRC operators online,
raw.253 <pre> 14<value> unknown connections,
raw.254 <pre> 14<value> channels formed
raw.255 <pre> And 14<users> users in 14<value> servers.
raw.332 <pre> <chan> topic- 15<text>
raw.333 <pre> <chan> topic- set by 15<nick> on <text>
raw.324 <pre> 14<chan> modes- 15<modes>
raw.329 <pre> <chan> created on- 15<text>
raw.401 <pre> 15<nick> no such nickname
raw.403 <pre> 15<chan> no such channel
raw.404 <pre> 15<chan> cannot send text to channel
raw.421 <pre> 15/<value> - unknown command
raw.442 <pre> 15<chan> you're not in
raw.467 <pre> 15<chan> cannot join (+k)
raw.471 <pre> 15<chan> cannot join (+l)
raw.473 <pre> 15<chan> cannot join (+i)
raw.474 <pre> 15<chan> cannot join (+b)
raw.475 <pre> 15<chan> cannot join (incorrect key)
raw.482 <pre> 15<chan> you're not opped
raw.327 <text>
CLINEOP 15
CLINEHOP 15
CLINEVOICE 15
CLINEREGULAR 14
CLINEOWNER 15
CLINEENEMY 10
CLINEFRIEND 15
CLINEME 00
CLineCharOwner -
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular
ECHO <pre> <text>
ECHOTARGET <pre> <text>
ERROR <pre> <text>
