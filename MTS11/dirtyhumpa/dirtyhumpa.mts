[mts]
NAME dirtyhumpa
AUTHOR dirtySanchez
EMAIL dirtySanchez9999@gmail.com
WEBSITE www.vdotmedia.com/ds/
DESCRIPTION First MTS theme created by dirtySanchez.
VERSION 1.0
MTSVERSION 1.1

SCRIPT dirtyhumpa.mrc

TIMESTAMP ON
TIMESTAMPFORMAT <c3>¬ <c2>hh:nn:sstt<c3>|

BASECOLORS 07,14,15,15
COLORS 1,15,15,7,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,15,1,15,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

FONTDEFAULT Tahoma,10
FONTQUERY Tahoma,10
FONTCHAN Tahoma,10

CLINEOWNER 07
CLINEOP 07
CLINEHOP 07
CLINEVOICE 14
CLINEREGULAR 15

PREFIX <c3>-<c2>-<c1>>
PARENTEXT <c2>(<c3><text><c2>)

TEXTCHAN <c1><cmode><c3><nick><c1>:<c3> <text>
TEXTCHANSELF <c1><cmode><c3><me><c1>:<c3> <text>
ACTIONCHAN <c1>~ <c3><cmode><nick> <c3><text>
ACTIONCHANSELF <c1>~ <c3><cmode><me> <c3><text>
NOTICECHAN <pre> <c3>NOTICE:<c2> (<c1><cmode><c2><nick> <c1>:: <c3><target><c2>)<c3> <text>
NOTICE <pre> <c3>NOTICE:<c2> From <c1>[ <c2><cmode><c3><nick> <c2>(<c3><address><c2>) <c1>] <c2>:<c3> <text>
NOTICESELF <pre> <c3>NOTICE:<c2> To <c1>[ <c3><target> <c1>] <c2>:<c3> <text>
NOTICESELFCHAN <pre> <c3>NOTICESELF:<c2> <target> <c1>:<c3> <text>
TEXTQUERY <c3><nick><c1>:<c3> <text>
TEXTQUERYSELF <c3><me><c1>:<c3> <text>
ACTIONQUERY <c1>~ <c3><nick> <c3><text>
ACTIONQUERYSELF <c1>~ 15<me> <c3><text>
TEXTMSG <c3><nick><c1>:<c3> <text>
TEXTMSGSELF <pre> <c3>MESSAGE:<c2> <target> <c1>:<c3> <text>

MODE !Script %:echo %::pre  $+ $chr(3) $+ %::c3 $+ CHANMODE: $+ $chr(3) $+ %::c2 %::nick $chr(3) $+ %::c3 $+ set modes $+ $chr(3) $+ %::c1 %::modes
MODEUSER !script %:echo %::pre  $+ $chr(3) $+ %::c3 $+ USERMODE: $+ $chr(3) $+ %::c2 %::nick $chr(3) $+ %::c3 $+ set modes $+ $chr(3) $+ %::c1 %::modes
JOIN <pre> <c3>JOIN: <c1><nick> <c2>(<c3><address><c2>)<c3> has joined <c1><chan>
JOINSELF <pre> <c3>JOIN: <c2>You<c3> are now talking in <c1><chan>
PART !Script %:echo %::pre  $+ $chr(3) $+ %::c3 $+ PART: $+ $chr(3) $+ %::c1 %::nick $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ %::address $+ $chr(3) $+ %::c2 $+ ) $chr(3) $+ %::c3 $+ has parted $+ $chr(3) $+ %::c1 %::chan $iif(%::text,%::parentext)
KICK <pre> <c3>KICK:<c1> <knick> <c3>was kicked from<c2> <chan> <c3>by<c1> <nick> <parentext>
KICKSELF <pre> <c3>KICK:<c1> You <c3>were kicked from<c2> <chan> <c3>by<c1> <nick> <parentext>
QUIT !Script %:echo %::pre  $+ $chr(3) $+ %::c3 $+ QUIT: $+ $chr(3) $+ $chr(3) $+ %::c1 %::nick $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ %::address $+ $chr(3) $+ %::c2 $+ ) $chr(3) $+ %::c1 $+ $chr(91) $+ $chr(3) $+ %::c3 $iif($gettok(%::text,2-,32),%::text,Quit) $chr(3) $+ %::c1 $+ $chr(93)
TOPIC <pre> <c3>TOPIC: <c1><nick><c3> changed the topic to <c2>"<c3><text><c2>"
NICK <pre> <c3>NICK:<c2> <nick><c3> is now known as <c1><newnick>
NICKSELF <pre> <c3>NICK:<c2> <nick><c3> is now known as <c1><newnick>
INVITE <pre> <c3>INVITE:<c2> <c2><nick><c3> has invited you to <c1><chan>
SERVERERROR <pre> <c3>ERROR: <text>
REJOIN <pre> <c3>REJOIN:<c2> You<c3> are attempting to rejoin <c1><chan>
CTCP !Script %:echo %::pre $chr(3) $+ %::c3 $+ CTCP: $+ $chr(3) $+ %::c1 %::nick $chr(3) $+ %::c3 $+ requested $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 $+ $lower(%::ctcp) $+ $iif(%::text,$chr(32) $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::text) $+ $chr(3) $+ %::c2 $+ "
CTCPCHAN !Script %:echo %::pre $chr(3) $+ %::c3 $+ CTCP: $+ $chr(3) $+ %::c1 %::nick $chr(3) $+ %::c3 $+ requested $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 $+ $lower(%::ctcp) $+ $iif(%::text,$chr(32) $+ %:;c1 $+ : $+ $chr(3) $+ %::c3 %::text)  $+ $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 at $+ $chr(3) $+ %::c1 %::chan
CTCPSELF !Script %:echo %::pre $chr(3) $+ %::c3 $+ CTCP: $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 $+ $lower(%::ctcp) $+ $iif(%::text,$chr(32) $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::text) $+ $chr(3) $+ %::c2 $+ " sent to $+ $chr(3) $+ %::c1 %::nick
CTCPCHANSELF !Script %:echo %::pre $chr(3) $+ %::c3 $+ CTCP: $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 $+ $lower(%::ctcp) $+ $iif(%::text,$chr(32) $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::text) $+ $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 sent to $+ $chr(3) $+ %::c1 %::chan
CTCPREPLY !Script %:echo %::pre $chr(3) $+ %::c3 $+ CTCPREPLY: $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 $+ $lower(%::ctcp) $+ $iif(%::text,$chr(32) $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::text) $+ $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 recieved from $+ $chr(3) $+ %::c1 %::nick
CTCPREPLYSELF !Script %:echo %::pre $chr(3) $+ %::c3 $+ CTCPREPLY: $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 $+ $lower(%::ctcp) $+ $iif(%::text,$chr(32) $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::text) $+ $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 sent to $+ $chr(3) $+ %::c1 %::nick
NOTIFY <pre> <c3>NOTIFY:<c1> <nick> <c2>(<c3><address><c2>)<c3> is online. <parentext>
UNOTIFY <pre> <c3>NOTIFY:<c1> <nick> <c2>(<c3><address><c2>)<c3> is offline. <parentext>
WALLOP <c2><nick><c1>:<c3> <text>
NOTICESERVER <pre> <c3>SERVER: <text>

DNS  <pre> <c3>DNS: Looking up 07<nick><address><c2>...
DNSERROR  <pre> <c3>DNS: Failed to resolve 07<address><c2>.
DNSRESOLVE !script %:echo %::pre $chr(3) $+ %::c3 $+ DNS: Resolved $+ $chr(3) $+ %::c1 $iif(%::nick,%::nick $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ $iif(%::raddress == %::iaddress,%::naddress,%::raddress) $+ $chr(3) $+ %::c2 $+ ),$iif(%::raddress == %::iaddress,%::naddress,%::iaddress)) $chr(3) $+ %::c3 $+ to $+ $chr(3) $+ %::c1 %::raddress
LOAD !script dirtyhumpa.load
ECHO <pre> <c3><text>
ECHOTARGET <pre> <c3><text>
ERROR <pre> <c3>ERROR: <text>
WHOIS !script dirtyhumpa.whois
WHOWAS !script dirtyhumpa.whowas

raw.other !script %:echo %::pre $chr(3) $+ %::c1 $+ $chr(40) $+ $chr(3) $+ $+($iif($len(%::c3) == 1,0),%::c3) $+ %::numeric $+ $chr(3) $+ %::c1 $+ $chr(41) $+ $chr(3) $+ %::c3 %::text
raw.002  <pre> <c3>Host<c1>: <server><c3> running <c2><value>
raw.003  <pre> <c3>Created on<c1>:<c3> <value>
raw.004 !script %:echo  %::pre $chr(3) $+ %::c3 $+ Modes $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 for users $chr(3) $+ %::c2 $+ $chr(91) $+ $chr(3) $+ %::c3 $+ $gettok(%::text,4,32) $+ $chr(3) $+ %::c2 $+ $chr(93) $+ $chr(3) $+ %::c3 and for channels $chr(3) $+ %::c2 $+ $chr(91) $+ $chr(3) $+ %::c3 $+ $gettok(%::text,3,32) $+ $chr(3) $+ %::c2 $+ $chr(93)
raw.005  <pre> <c3>Protocols<c1>: <c3><text>
raw.251 !script dirtyhumpa.lusers
raw.252       <c1>¤ <c3>Operators Online<c1>:<c3> <value>
raw.253       <c1>¤ <c3>Unknown Connections<c1>:<c3> <value>
raw.254       <c1>¤ <c3>Channels Formed<c1>:<c3> <value>
raw.255       <c1>¤ <c3>Clients<c1>:<c3> <users> on <value> servers
raw.265 !script %:echo $str($chr(160),5) $chr(3) $+ %::c1 $+ ¤ $+ $chr(3) $+ %::c3 Local: $chr(3) $+ %::c1 $+ $chr(91) $+ $chr(3) $+ %::c3 Max Users $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::value $chr(3) $+ %::c1 $+ :: $+ $chr(3) $+ %::c3 Users $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::users $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ $round($calc((%::users / %::value) * 100),2) $+ $chr(37) $+ $chr(3) $+ %::c2 $+ ) $chr(3) $+ %::c1 $+ $chr(93)
raw.266 !script %:echo $str($chr(160),5) $chr(3) $+ %::c1 $+ ¤ $+ $chr(3) $+ %::c3 Global: $chr(3) $+ %::c1 $+ $chr(91) $+ $chr(3) $+ %::c3 Max Users $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::value $chr(3) $+ %::c1 $+ :: $+ $chr(3) $+ %::c3 Users $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::users $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ $round($calc((%::users / %::value) * 100),2) $+ $chr(37) $+ $chr(3) $+ %::c2 $+ ) $chr(3) $+ %::c1 $+ $chr(93)
raw.280 !script %:echo $+(%::pre,$chr(3),%::c3) G-Lined $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::nick $chr(3) $+ %::c1 $+ $chr(40) $+ $chr(3) $+ %::c3 $+ Reason $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 $gettok(%::text,4-,32) $chr(3) $+ %::c1 $+ - $+ $chr(3) $+ %::c3 Time Remaining $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 $duration($calc($gettok(%::text,1,32) - $ctime)) $+ $chr(3) $+ %::c1 $+ $chr(41)
raw.281 <pre> <c3>End of G<c1>-<c3>Line List
raw.302 !script %:echo %::pre $chr(3) $+ %::c3 $+ Userhost $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::nick $+ ! $+ %::address  $+ $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ $iif(* isin %::value,$iif(- isin %::value,Away $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 IRCop,Not Away $chr(3) $+ %::c2 $+ : $+ $chr(3) $+ %::c3 IRCop),$iif(- isin %::value,Away,Not Away)) $+ $chr(3) $+ %::c2 $+ )
raw.315 <pre> <c3>End of <c1>/<c2>W<c3>ho for <c1><nick>
raw.324  <pre> <c3>Modes<c1>:<c3> for <c1><chan> <c2>[<c3><modes><c2>]
raw.329 !script %:echo %::pre $chr(3) $+ %::c3 $+ Created $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 $asctime(%::text,dd/mm/yyyy $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ dddd $+ $chr(3) $+ %::c2 $+ ))
raw.330 !script set %::auth %::text
raw.331 <pre> <c3>Topic<c1>:<c3> Currently no topic set.
raw.332 !Script dirtyhumpa.topic
raw.333 !Script dirtyhumpa.topic2
raw.338 !script set %::hostip %::text
raw.341 <pre> <c3>INVITE: <c2><nick><c3> has been invited to join <c1><chan>
raw.345 !script %:echo %::pre  $+ $chr(3) $+ %::c3 $+ INVITE: $+ $chr(3) $+ %::c2 $gettok(%::text,2,32) $chr(3) $+ %::c3 $+ invited $+ $chr(3) $+ %::c1 $gettok(%::text,3,32) $chr(3) $+ %::c3 $+ to join $+ $chr(3) $+ %::c2 %::chan
raw.352 !script %:echo %::pre $chr(3) $+ %::c1 $+ / $+ $chr(3) $+ %::c2 $+ W $+ $chr(3) $+ %::c3 $+ ho Information $+ $chr(3) $+ %::c1 $+ : %::cmode $+ $chr(3) $+ %::c3 $+ %::nick $chr(3) $+ %::c2 $+ ( $+ $chr(3) $+ %::c3 $+ %::address $+ $chr(3) $+ %::c2 $+ ) $chr(3) $+ %::c1 $+ ~ $+ $chr(3) $+ %::c3 %::realname $chr(3) $+ %::c1 $+ ~ $+ $chr(3) $+ %::c2 %::wserver $iif(%::away == g || %::ircop == is,$chr(3) $+ %::c1 $+ ~ $+ $chr(3) $+ %::c3 $iif(%::away == g,$iif(%::isoper == is,away $chr(3) $+ %::c2 $+ - $+ $chr(3) $+ %::c3 ircop,away),ircop)) $chr(3) $+ %::c1 $+ ~ $+ $chr(3) $+ %::c2 $gettok(%::text,6,32) $chr(3) $+ %::c3 $+ hops
raw.353 !script dirtyhumpa.names
raw.366 !script dirtyhumpa.names2
raw.367 !script dirtyhumpa.bans
raw.368 !script dirtyhumpa.bans2
raw.369
raw.372        ¤ <text>
raw.375 <pre> <c3>SERVER: Message of the day -
raw.376 <pre> <c3>SERVER: End of /motd -
raw.391 !script %:echo %::pre $chr(3) $+ %::c3 $+ Time $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::text
raw.378       <c1>¤ <c3>Real Hostname<c1>:<c3> <text>
raw.401 <pre> <c3>ERROR: No such nick as <c1><nick><c2>.
raw.403 <pre> <c3>ERROR: No such channel as <c1><chan><c2>.
raw.404 <pre> <c3>ERROR: Unable to send to <c1><chan><c2>.
raw.406 <pre> <c3>ERROR: There was no such nick as <c1><nick><c2>.
raw.421 !script %:echo %::pre  $+ $chr(3) $+ %::c3 $+ ERROR: $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c1 $+  $chr(47) $+ $chr(3) $+ %::c3 $+ $lower(%::value) $+ $chr(3) $+ %::c2 $+ " $+ $chr(3) $+ %::c3 is an unknown command.
raw.432 <pre> <c3>ERROR: <c1><nick><c3> is an invalid nickname<c2>.
raw.433 <pre> <c3>ERROR: The nickname <c1><nick><c3> is already being used<c2>.
raw.441 <pre> <c3>ERROR: <c1><nick><c3> is currently not on <c1><chan><c2>.
raw.442 <pre> <c3>ERROR: <c2>You<c3> are currently not on <c1><chan><c2>.
raw.443 <pre> <c3>ERROR: <c1><nick><c3> is already on <c1><chan><c2>.
raw.467 <pre> <c3>ERROR: Unable to join <c1><chan> <c2>(<c3>key needed<c2>)
raw.471 <pre> <c3>ERROR: Unable to join <c1><chan> <c2>(<c3>full channel<c2>)
raw.473 <pre> <c3>ERROR: Unable to join <c1><chan> <c2>(<c3>invite only<c2>)
raw.474 <pre> <c3>ERROR: Unable to join <c1><chan> <c2>(<c3>banned<c2>)
raw.475 <pre> <c3>ERROR: Unable to join <c1><chan> <c2>(<c3>invalid key<c2>)
raw.482 <pre> <c3>ERROR: You lack operator status in <c1><chan><c2>.
raw.512 !script %:echo %::pre $chr(3) $+ %::c3 $+ No such gline $+ $chr(3) $+ %::c1 $+ : $+ $chr(3) $+ %::c3 %::nick

Scheme1 Dust
Scheme2 Blood
Scheme3 Sky
Scheme4 Grass
Scheme5 Clouds
Scheme6 Clouds2
Scheme7 Dunno ;)
Scheme8 Eh?
Scheme9 Mist
Scheme10 Trans
Scheme11 PEENK~
Scheme12 Boo
Scheme13 Forest
Scheme14 Water
Scheme15 Purpsles.

[scheme1]

BASECOLORS 15,14,1,15
COLORS 8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,1,8,1,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 230,225,220 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 150,135,100 120,110,80

CLINEOWNER 15
CLINEOP 15
CLINEHOP 00
CLINEVOICE 14
CLINEREGULAR 15

[scheme2]

BASECOLORS 04,14,5,15
COLORS 8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,1,8,1,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 250,230,230 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 210,130,100 120,110,80

CLINEOWNER 04
CLINEOP 04
CLINEHOP 04
CLINEVOICE 14
CLINEREGULAR 05

[scheme3]

BASECOLORS 14,14,15,15
COLORS 2,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,2,15,2,15,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 55,100,190 120,160,255

CLINEOWNER 00
CLINEOP 00
CLINEHOP 14
CLINEVOICE 14
CLINEREGULAR 15

[scheme4]

BASECOLORS 03,14,15,15
COLORS 8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,3,8,3,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 0,66,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 85,170,70 95,175,65

CLINEOWNER 03
CLINEOP 03
CLINEHOP 09
CLINEVOICE 14
CLINEREGULAR 15

[scheme5]

BASECOLORS 11,14,1,15
COLORS 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 125,130,120 0,0,255 255,0,255 65,65,65 208,208,208

CLINEOWNER 11
CLINEOP 11
CLINEHOP 11
CLINEVOICE 14
CLINEREGULAR 1

[scheme6]

BASECOLORS 13,11,15,15
COLORS 14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,14,15,14,15,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 125,130,120 0,0,255 100,100,100 65,65,65 208,208,208

CLINEOWNER 13
CLINEOP 13
CLINEHOP 13
CLINEVOICE 11
CLINEREGULAR 15

[scheme7]

BASECOLORS 13,14,15,15
COLORS 1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,1,15,1,15,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 125,130,120 0,0,255 70,130,150 135,155,150 208,208,208

CLINEOWNER 13
CLINEOP 13
CLINEHOP 02
CLINEVOICE 14
CLINEREGULAR 15

[scheme8]

BASECOLORS 07,15,14,15
COLORS 0,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,14,0,14,15
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 90,90,90

CLINEOWNER 07
CLINEOP 07
CLINEHOP 07
CLINEVOICE 15
CLINEREGULAR 14


[scheme9]

BASECOLORS 11,14,00,00
COLORS 01,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,01,01,00,01,00,00,00,01
RGBCOLORS 255,255,255 55,65,75 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,107,1 255,255,0 0,252,0 0,147,147 74,119,195 0,0,252 255,0,255 155,155,185 210,210,210

CLINEOWNER 11
CLineOP 11
CLineHOP 11
CLINEVOICE 14
CLINEREGULAR 15

[scheme10]

BASECOLORS 05,14,01,15
COLORS 15,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,1,15,1,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

CLINEOWNER 05
CLINEOP 05
CLINEHOP 05
CLINEVOICE 14
CLINEREGULAR 01

[scheme11]

BASECOLORS 15,01,14,15
COLORS 0,14,14,15,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,14,0,14,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 255,110,100

CLINEOWNER 15
CLINEOP 15
CLINEHOP 15
CLINEVOICE 01
CLINEREGULAR 14

[scheme12]

BASECOLORS 02,12,01,15
COLORS 14,01,01,02,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,14,01,14,01,12
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,70 255,0,255 180,180,180 208,208,208

CLINEOWNER 02
CLINEOP 02
CLINEHOP 02
CLINEVOICE 12
CLINEREGULAR 01

[scheme13]

BASECOLORS 14,15,00,15
COLORS 03,00,00,14,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,03,00,03,00,14
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,80,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 0,0,255 255,0,255 128,128,128 208,208,208

CLINEOWNER 00
CLINEOP 00
CLINEHOP 00
CLINEVOICE 15
CLINEREGULAR 14

[scheme14]

BASECOLORS 13,12,02,15
COLORS 15,02,02,13,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,02,15,02,15,02,12
RGBCOLORS 255,255,255 0,0,0 32,56,138 0,80,0 255,0,0 159,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 40,72,176 50,87,213 128,128,128 208,208,208

CLINEOWNER 02
CLINEOP 02
CLINEHOP 02
CLINEVOICE 12
CLINEREGULAR 13

[scheme15]

BASECOLORS 03,13,15,15
COLORS 08,15,15,03,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,08,15,08,15,13
RGBCOLORS 255,255,255 0,0,0 0,0,128 135,85,215 255,0,0 159,0,0 160,0,160 255,128,0 87,55,138 0,255,0 0,144,144 0,255,255 0,0,255 125,90,240 128,128,128 208,208,208

CLINEOWNER 03
CLINEOP 03
CLINEHOP 03
CLINEVOICE 13
CLINEREGULAR 15
