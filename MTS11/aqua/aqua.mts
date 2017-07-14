[MTS]
NAME Aqua
AUTHOR AcidSkull
EMAIL mafafa2@cantv.net
WEBSITE http:\\a-script.go.to
DESCRIPTION Blue Theme, with various schemes.
VERSION 1.3
MTSVERSION 1.1

RGBCOLORS 210,225,251 0,0,0 19,48,92 0,144,0 255,0,0 143,167,201 64,115,185 255,128,0 255,255,0 104,132,159 118,154,190 227,238,253 75,104,120 52,96,143 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,0,1,0,1,15,6,0
FONTDEFAULT Courier New,12
FONTCHAN Courier New,12
FONTQUERY Courier New,12

SCRIPT aqua.mrc
PREFIX 12·10·

TEXTCHAN !script textchan %::nick %::cmode %::text
TEXTCHANSELF !script textchan_me %::me %::cmode %::text 

TEXTQUERY !script textq %::nick %::text
TEXTQUERYSELF !script textq_me %::nick %::text

ACTIONCHAN !script action_ %::nick %::text
ACTIONCHANSELF !script action_ %::nick %::text
ACTIONQUERY !script action_ %::nick %::text
ACTIONQUERYSELF !script action_ %::nick %::text

CTCPSELF !script ctcp_s a %::nick %::ctcp %::text
CTCPREPLY !script ctcp_s b %::nick %::ctcp %::text
CTCPREPLYSELF !script ctcp_rs %::ctcp %::text
CTCPCHAN !script ctcp_c a %::nick %::chan %::ctcp %::text
CTCPCHANSELF !script ctcp_c b %::chan %::ctcp %::text
CTCP !script ctc_p %::nick %::ctcp %::text

DNS <pre> 2DNS FOR: 11.....5 [<address>]
DNSERROR <pre> 2DNS Error 11....5 Unable to resolve 2[13<iaddress>2]
DNSRESOLVE <pre> RESOLVE ...... 2[13<address>2] :5 <iaddress> - <naddress>

ERROR <pre>2 ERROR: 11.......6 <text>
INVITE <pre> 2[13Invite2]11 .....13 <nick>10 has invited you to join13 <chan>

JOIN 12»10» 2[13Join2]11 .......2 [12<nick>2] [<address>]
JOINSELF 12»10» 2[13Join2]11 .......12 Joining 2[13<chan>2] 

PART 12«10« 2[13Part2]11 ....... 6<nick> 2[13<address>2]
QUIT 12«10« 2[13Quit2]11 ....... 6<nick> 2[13<address>2] 2[5<text>2]

KICK 12×10× 9[5Kick9]11 .......5 <nick> kick <knick> 2[9<chan>2] 2[9<text>2]
KICKSELF 12×10× 9[5Kick9]11 .......5 You have been kicked by <nick> from 2[9<chan>2] 2[9<text>2] 

MODE <pre> 2[13Modes2]11 ...... 12<nick>5 sets mode:13 <modes>
MODEUSER 2[13!2]13 2[13Mode2]10 ; <modes>

NAMES Names: <pre> [<chan>] <text>

NICK 12=10= 2[13Nick2]11 .......6 <nick> changes nick to 9[5<newnick>9]
NICKSELF 12=10= 2[13Nick2]11 .......6 Your new nick is 9[5<newnick>9] 

NOTICECHAN !script noti_c a %::nick %::chan %::text
NOTICESELFCHAN !script noti_c b %::chan %::text
NOTICE !script noti_n a %::nick %::text
NOTICESELF !script noti_n b %::text
NOTICESERVER 2[13!2]10 Server 11......5 <text>

NOTIFY !Script Noti_f a %::nick %::address %::text
UNOTIFY !Script Noti_f b %::nick %::address %::text

NOTONCHAN 13[You aren`t on a channel]

REJOIN !Script re_join %::chan

SERVERERROR <pre> 2[13Error2]11 ......2 <text>

TOPIC <pre> [Topic]11 ......5 <nick> sets new topic:10 <text>  

CLINEOP 2
CLINEVOICE 6
CLINEREGULAR 9
CLINEOWNER 4
CLINEME 5
CLINECHAROP 2@
CLINECHARVOICE 6+
CLINECHARREGULAR
CLINEIRCOP 4

Raw.001 2[13!2]10 Connected to 115 <text>
Raw.002 2[13!2]10 Host 11........5 <address>
Raw.003 2[13!2]10 Created 11.....5 <value>
Raw.005 2[13!2]10 Protocols 11...5 <text>
RAW.221 2[13!2]10 Usermodes 11...5 <modes>
RAW.250 2[13!2]10 Connections 11.5 <value>
RAW.251 2[13!2]10 Users 11.......5 <users> users / Invisible: <value>
RAW.252 2[13!2]10 Opers 11.......5 <value> online
RAW.253 2[13!2]10 Unknown 11.....5 <value> connections
RAW.254 2[13!2]10 Channels 11....5 <value> formed
RAW.255 2[13!2]10 Clients 11.....5 <users> / Servers: <value>
RAW.265 2[13!2]10 Local users 11.5 <users> / Max: <value>
RAW.266 2[13!2]10 Global users 115 <users> / Max: <value>
RAW.301 2[13!2]10 Away 11........5 <text>
RAW.302 2[13!2]10 Userhost 11....5 <nick> 2[6adress2] [10<value>13]
RAW.305 2[13!2]10 Away 11........5 You're no longer marked as being away
RAW.306 2[13!2]10 Away 11........5 You're now marked as being away

RAW.311 !script whois_ %::nick %::address %::realname
RAW.312 !script server_ %::wserver
RAW.313 2›5» 11. 6Stat: 11...2:11...5 IRC Operator 11......................................................2|
RAW.317 !script idle_ %::idletime
RAW.318  2¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
RAW.319 !script chan_ %::chan
RAW.324 2[13!2]10 Chan Modes 11..54 <modes>
RAW.332 !Script topic_ %::text
RAW.333 !Script toset_ %::nick %::text
RAW.341 <pre> 2[13Invite2]11 .....13 <nick>10 has invited you to join13 <chan>


RAW.353 !Script nam_ %::chan %::text
RAW.366 2 :—————————————————————————————————————————————————————————————————————————————————————

RAW.381 2[13!2]10 Oper 11........5 You are now a 2IRC Operator 2[13<address>2]
RAW.401 2[13!2]10 Error 11.......5 No such nickname 2[13<nickname>2]
RAW.403 2[13!2]10 Error 11.......5 No such channel 2[13<chan>2]
RAW.404 2[13!2]10 Error 11.......5 Can't send message to 2[13<nick>2]
RAW.421 2[13!2]10 Error 11.......5 Invalid Command 2[13<text>2]
RAW.433 2[13!2]10 Error 11....... 2[13<nick>2]5 is already in use

RAW.467 2[13!2]10 Reject 11......5 Can't join 2[13<chan>2]5 : +k
RAW.471 2[13!2]10 Reject 11......5 Can't join 2[13<chan>2]5 : Full
RAW.473 2[13!2]10 Reject 11......5 Can't join 2[13<chan>2]5 : Invited Only
RAW.474 2[13!2]10 Reject 11......5 Can't join 2[13<chan>2]5 : Banned

RAW.482 2[13!2]10 Oper 11........5 You should be an IRC Operator

;ImageStatus photo bg.png

LOAD !Script load_
UNLOAD !Script unload_


;--------------------------------------------------
;              Schemes
;--------------------------------------------------


Scheme1 Liquid
Scheme2 Dark
Scheme3 Light
Scheme4 Gray
Scheme5 Purple
Scheme6 BlackComb
Scheme7 Cream
Scheme8 Crest
Scheme9 dasda

;--------------------------------------------------


[Scheme1]
RGBCOLORS 210,225,251 26,69,113 33,84,141 0,144,0 255,0,0 203,219,245 124,168,220 255,128,0 255,255,0 171,197,239 118,154,190 17,45,74 92,148,203 82,138,207 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,1,0,1,12,6,5,0
CLINEOP 9
CLINECHAROP 9@

;-------------


[Scheme2]
RGBCOLORS 210,225,251 100,100,100 33,84,141 0,144,0 255,0,0 179,202,240 124,168,220 255,128,0 255,255,0 171,197,239 118,154,190 0,0,0 92,148,203 82,138,207 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,11,5,11,5,15,6,11
FONTDEFAULT Bright,11
FONTCHAN Bright,12
FONTQUERY Bright,12
PREFIX 12ú10ú

TEXTCHAN !script textchan2 %::nick %::cmode %::text
TEXTCHANSELF !script textchan_me2 %::me %::cmode %::text 
TEXTQUERY !script textq2 %::nick %::text
TEXTQUERYSELF !script textq_me2 %::nick %::text

ACTIONCHAN !script action_2 %::nick %::text
ACTIONCHANSELF !script action_2 %::nick %::text
ACTIONQUERY !script action_2 %::nick %::text
ACTIONQUERYSELF !script action_2 %::nick %::text

CTCPSELF !script ctcp_s2 a %::nick %::ctcp %::text
CTCPREPLY !script ctcp_s2 b %::nick %::ctcp %::text
CTCPREPLYSELF !script ctcp_rs2 %::ctcp %::text
CTCPCHAN !script ctcp_c2 a %::nick %::chan %::ctcp %::text
CTCPCHANSELF !script ctcp_c2 b %::chan %::ctcp %::text
CTCP !script ctc_p2 %::nick %::ctcp %::text

JOIN 12¯10¯ 2[13Join2]11 .......2 [12<nick>2] [<address>]
JOINSELF 12¯10¯ 2[13Join2]11 .......12 Joining 2[13<chan>2]

KICK 12ý10ý 9[5Kick9]11 .......5 <nick> kick <knick> 2[9<chan>2] 2[9<text>2]
KICKSELF 12ý10ý 9[5Kick9]11 .......5 You have been kicked by <nick> from 2[9<chan>2] 2[9<text>2] 

NICK 12ð10ð 2[13Nick2]11 .......6 <nick> changes nick to 9[5<newnick>9]
NICKSELF 12ð10ð 2[13Nick2]11 .......6 Your new nick is 9[5<newnick>9]  

NOTICECHAN !script noti_c2 a %::nick %::chan %::text
NOTICESELFCHAN !script noti_c2 b %::chan %::text
NOTICE !script noti_n2 a %::nick %::text
NOTICESELF !script noti_n2 b %::text

NOTIFY !Script Noti_f2 a %::nick %::address %::text
UNOTIFY !Script Noti_f2 b %::nick %::address %::text

PART 12®10® 2[13Part2]11 ....... 6<nick> 2[13<address>2]
QUIT 12®10® 2[13Quit2]11 ....... 6<nick> 2[13<address>2] 2[5<text>2]

RAW.332 !Script topic_2 %::text
RAW.333 !Script toset_2 %::nick %::text
RAW.311 !script whois_2 %::nick %::address %::realname
RAW.319 !script chan_2 %::chan

RAW.312 !script server_2 %::wserver
RAW.317 !script idle_2 %::idletime
RAW.318 !Script
RAW.313 <pre> 6³ Stat: 11..2:11...5 IRC Operator

LOAD !Script load_2
UNLOAD !Script unload_2

RAW.353 !Script nam_2 %::chan %::text
RAW.366 !Script


CLINEOP 6
CLINEVOICE 6
CLINEREGULAR 9
CLINEOWNER 4
CLINEME 5
CLINECHAROP 6@
CLINECHARVOICE 6+
CLINECHARREGULAR
CLINEIRCOP 4

;----------------

[Scheme3]
RGBCOLORS 210,225,251 0,0,0 40,103,172 0,144,0 255,0,0 203,219,245 124,168,220 255,128,0 255,255,0 171,197,239 118,154,190 27,70,114 92,148,203 82,138,207 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,11,9,11,5,15,6,11
FONTDEFAULT Bright,11
FONTCHAN Bright,12
FONTQUERY Bright,12
PREFIX 12ú10ú

TEXTCHAN !script textchan2 %::nick %::cmode %::text
TEXTCHANSELF !script textchan_me2 %::me %::cmode %::text 
TEXTQUERY !script textq2 %::nick %::text
TEXTQUERYSELF !script textq_me2 %::nick %::text

ACTIONCHAN !script action_2 %::nick %::text
ACTIONCHANSELF !script action_2 %::nick %::text
ACTIONQUERY !script action_2 %::nick %::text
ACTIONQUERYSELF !script action_2 %::nick %::text

CTCPSELF !script ctcp_s2 a %::nick %::ctcp %::text
CTCPREPLY !script ctcp_s2 b %::nick %::ctcp %::text
CTCPREPLYSELF !script ctcp_rs2 %::ctcp %::text
CTCPCHAN !script ctcp_c2 a %::nick %::chan %::ctcp %::text
CTCPCHANSELF !script ctcp_c2 b %::chan %::ctcp %::text
CTCP !script ctc_p2 %::nick %::ctcp %::text

JOIN 12¯10¯ 2[13Join2]11 .......2 [12<nick>2] [<address>]
JOINSELF 12¯10¯ 2[13Join2]11 .......12 Joining 2[13<chan>2]

KICK 12ý10ý 9[5Kick9]11 .......5 <nick> kick <knick> 2[9<chan>2] 2[9<text>2]
KICKSELF 12ý10ý 9[5Kick9]11 .......5 You have been kicked by <nick> from 2[9<chan>2] 2[9<text>2] 

NICK 12ð10ð 2[13Nick2]11 .......6 <nick> changes nick to 9[5<newnick>9]
NICKSELF 12ð10ð 2[13Nick2]11 .......6 Your new nick is 9[5<newnick>9]  

NOTICECHAN !script noti_c2 a %::nick %::chan %::text
NOTICESELFCHAN !script noti_c2 b %::chan %::text
NOTICE !script noti_n2 a %::nick %::text
NOTICESELF !script noti_n2 b %::text

NOTIFY !Script Noti_f2 a %::nick %::address %::text
UNOTIFY !Script Noti_f2 b %::nick %::address %::text

PART 12®10® 2[13Part2]11 ....... 6<nick> 2[13<address>2]
QUIT 12®10® 2[13Quit2]11 ....... 6<nick> 2[13<address>2] 2[5<text>2]

RAW.332 !Script topic_2 %::text
RAW.333 !Script toset_2 %::nick %::text
RAW.311 !script whois_2 %::nick %::address %::realname
RAW.319 !script chan_2 %::chan

RAW.312 !script server_2 %::wserver
RAW.317 !script idle_2 %::idletime
RAW.318 !Script
RAW.313 <pre> 6³ Stat: 11..2:11...5 IRC Operator

LOAD !Script load_2
UNLOAD !Script unload_2

RAW.353 !Script nam_2 %::chan %::text
RAW.366 !Script


CLINEOP 6
CLINEVOICE 6
CLINEREGULAR 9
CLINEOWNER 4
CLINEME 5
CLINECHAROP 6@
CLINECHARVOICE 6+
CLINECHARREGULAR
CLINEIRCOP 4

;----------------

[Scheme4]
RGBCOLORS 210,225,251 0,0,0 88,109,124 0,144,0 255,0,0 211,223,235 129,142,154 255,128,0 255,255,0 173,197,209 118,154,190 55,82,100 159,175,188 189,206,216 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,11,9,11,5,15,6,11
FONTDEFAULT Bright,11
FONTCHAN Bright,12
FONTQUERY Bright,12
PREFIX 12ú10ú

TEXTCHAN !script textchan2 %::nick %::cmode %::text
TEXTCHANSELF !script textchan_me2 %::me %::cmode %::text 
TEXTQUERY !script textq2 %::nick %::text
TEXTQUERYSELF !script textq_me2 %::nick %::text

ACTIONCHAN !script action_2 %::nick %::text
ACTIONCHANSELF !script action_2 %::nick %::text
ACTIONQUERY !script action_2 %::nick %::text
ACTIONQUERYSELF !script action_2 %::nick %::text

CTCPSELF !script ctcp_s2 a %::nick %::ctcp %::text
CTCPREPLY !script ctcp_s2 b %::nick %::ctcp %::text
CTCPREPLYSELF !script ctcp_rs2 %::ctcp %::text
CTCPCHAN !script ctcp_c2 a %::nick %::chan %::ctcp %::text
CTCPCHANSELF !script ctcp_c2 b %::chan %::ctcp %::text
CTCP !script ctc_p2 %::nick %::ctcp %::text

JOIN 12¯10¯ 2[13Join2]11 .......2 [12<nick>2] [<address>]
JOINSELF 12¯10¯ 2[13Join2]11 .......12 Joining 2[13<chan>2]

KICK 12ý10ý 9[5Kick9]11 .......5 <nick> kick <knick> 2[9<chan>2] 2[9<text>2]
KICKSELF 12ý10ý 9[5Kick9]11 .......5 You have been kicked by <nick> from 2[9<chan>2] 2[9<text>2] 

NICK 12ð10ð 2[13Nick2]11 .......6 <nick> changes nick to 9[5<newnick>9]
NICKSELF 12ð10ð 2[13Nick2]11 .......6 Your new nick is 9[5<newnick>9]  

NOTICECHAN !script noti_c2 a %::nick %::chan %::text
NOTICESELFCHAN !script noti_c2 b %::chan %::text
NOTICE !script noti_n2 a %::nick %::text
NOTICESELF !script noti_n2 b %::text

NOTIFY !Script Noti_f2 a %::nick %::address %::text
UNOTIFY !Script Noti_f2 b %::nick %::address %::text

PART 12®10® 2[13Part2]11 ....... 6<nick> 2[13<address>2]
QUIT 12®10® 2[13Quit2]11 ....... 6<nick> 2[13<address>2] 2[5<text>2]

RAW.332 !Script topic_2 %::text
RAW.333 !Script toset_2 %::nick %::text
RAW.311 !script whois_2 %::nick %::address %::realname
RAW.319 !script chan_2 %::chan

RAW.312 !script server_2 %::wserver
RAW.317 !script idle_2 %::idletime
RAW.318 !Script
RAW.313 <pre> 6³ Stat: 11..2:11...5 IRC Operator

LOAD !Script load_2
UNLOAD !Script unload_2

RAW.353 !Script nam_2 %::chan %::text
RAW.366 !Script


CLINEOP 6
CLINEVOICE 6
CLINEREGULAR 9
CLINEOWNER 4
CLINEME 5
CLINECHAROP 6@
CLINECHARVOICE 6+
CLINECHARREGULAR
CLINEIRCOP 4

;--------------

[Scheme5]
RGBCOLORS 210,225,251 0,0,0 41,78,109 0,144,0 255,0,0 163,170,163 107,125,139 255,128,0 255,255,0 80,101,154 157,168,204 35,39,75 159,175,188 123,128,149 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,11,9,11,5,15,6,11
FONTDEFAULT Bright,11
FONTCHAN Bright,12
FONTQUERY Bright,12
PREFIX 12ú10ú

TEXTCHAN !script textchan2 %::nick %::cmode %::text
TEXTCHANSELF !script textchan_me2 %::me %::cmode %::text 
TEXTQUERY !script textq2 %::nick %::text
TEXTQUERYSELF !script textq_me2 %::nick %::text

ACTIONCHAN !script action_2 %::nick %::text
ACTIONCHANSELF !script action_2 %::nick %::text
ACTIONQUERY !script action_2 %::nick %::text
ACTIONQUERYSELF !script action_2 %::nick %::text

CTCPSELF !script ctcp_s2 a %::nick %::ctcp %::text
CTCPREPLY !script ctcp_s2 b %::nick %::ctcp %::text
CTCPREPLYSELF !script ctcp_rs2 %::ctcp %::text
CTCPCHAN !script ctcp_c2 a %::nick %::chan %::ctcp %::text
CTCPCHANSELF !script ctcp_c2 b %::chan %::ctcp %::text
CTCP !script ctc_p2 %::nick %::ctcp %::text

JOIN 12¯10¯ 2[13Join2]11 .......2 [12<nick>2] [<address>]
JOINSELF 12¯10¯ 2[13Join2]11 .......12 Joining 2[13<chan>2]

KICK 12ý10ý 9[5Kick9]11 .......5 <nick> kick <knick> 2[9<chan>2] 2[9<text>2]
KICKSELF 12ý10ý 9[5Kick9]11 .......5 You have been kicked by <nick> from 2[9<chan>2] 2[9<text>2] 

NICK 12ð10ð 2[13Nick2]11 .......6 <nick> changes nick to 9[5<newnick>9]
NICKSELF 12ð10ð 2[13Nick2]11 .......6 Your new nick is 9[5<newnick>9]  

NOTICECHAN !script noti_c2 a %::nick %::chan %::text
NOTICESELFCHAN !script noti_c2 b %::chan %::text
NOTICE !script noti_n2 a %::nick %::text
NOTICESELF !script noti_n2 b %::text

NOTIFY !Script Noti_f2 a %::nick %::address %::text
UNOTIFY !Script Noti_f2 b %::nick %::address %::text

PART 12®10® 2[13Part2]11 ....... 6<nick> 2[13<address>2]
QUIT 12®10® 2[13Quit2]11 ....... 6<nick> 2[13<address>2] 2[5<text>2]

RAW.332 !Script topic_2 %::text
RAW.333 !Script toset_2 %::nick %::text
RAW.311 !script whois_2 %::nick %::address %::realname
RAW.319 !script chan_2 %::chan

RAW.312 !script server_2 %::wserver
RAW.317 !script idle_2 %::idletime
RAW.318 !Script
RAW.313 <pre> 6³ Stat: 11..2:11...5 IRC Operator

LOAD !Script load_2
UNLOAD !Script unload_2

RAW.353 !Script nam_2 %::chan %::text
RAW.366 !Script


CLINEOP 6
CLINEVOICE 6
CLINEREGULAR 9
CLINEOWNER 4
CLINEME 5
CLINECHAROP 6@
CLINECHARVOICE 6+
CLINECHARREGULAR
CLINEIRCOP 4


;-------------


[Scheme6]
RGBCOLORS 210,225,251 0,0,0 53,53,96 0,144,0 255,0,0 149,159,187 96,111,152 255,128,0 255,255,0 56,69,120 157,168,204 11,19,32 159,175,188 123,128,149 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,11,9,11,5,15,6,11
FONTDEFAULT Terminal,12
FONTCHAN Terminal,12
FONTQUERY Terminal,12
PREFIX 12ú10ú

TEXTCHAN !script textchan2 %::nick %::cmode %::text
TEXTCHANSELF !script textchan_me2 %::me %::cmode %::text 
TEXTQUERY !script textq2 %::nick %::text
TEXTQUERYSELF !script textq_me2 %::nick %::text

ACTIONCHAN !script action_2 %::nick %::text
ACTIONCHANSELF !script action_2 %::nick %::text
ACTIONQUERY !script action_2 %::nick %::text
ACTIONQUERYSELF !script action_2 %::nick %::text

CTCPSELF !script ctcp_s2 a %::nick %::ctcp %::text
CTCPREPLY !script ctcp_s2 b %::nick %::ctcp %::text
CTCPREPLYSELF !script ctcp_rs2 %::ctcp %::text
CTCPCHAN !script ctcp_c2 a %::nick %::chan %::ctcp %::text
CTCPCHANSELF !script ctcp_c2 b %::chan %::ctcp %::text
CTCP !script ctc_p2 %::nick %::ctcp %::text

JOIN 12¯10¯ 2[13Join2]11 .......2 [12<nick>2] [<address>]
JOINSELF 12¯10¯ 2[13Join2]11 .......12 Joining 2[13<chan>2]

KICK 12ý10ý 9[5Kick9]11 .......5 <nick> kick <knick> 2[9<chan>2] 2[9<text>2]
KICKSELF 12ý10ý 9[5Kick9]11 .......5 You have been kicked by <nick> from 2[9<chan>2] 2[9<text>2] 

NICK 12ð10ð 2[13Nick2]11 .......6 <nick> changes nick to 9[5<newnick>9]
NICKSELF 12ð10ð 2[13Nick2]11 .......6 Your new nick is 9[5<newnick>9]  

NOTICECHAN !script noti_c2 a %::nick %::chan %::text
NOTICESELFCHAN !script noti_c2 b %::chan %::text
NOTICE !script noti_n2 a %::nick %::text
NOTICESELF !script noti_n2 b %::text

NOTIFY !Script Noti_f2 a %::nick %::address %::text
UNOTIFY !Script Noti_f2 b %::nick %::address %::text

PART 12®10® 2[13Part2]11 ....... 6<nick> 2[13<address>2]
QUIT 12®10® 2[13Quit2]11 ....... 6<nick> 2[13<address>2] 2[5<text>2]

RAW.332 !Script topic_2 %::text
RAW.333 !Script toset_2 %::nick %::text
RAW.311 !script whois_2 %::nick %::address %::realname
RAW.319 !script chan_2 %::chan

RAW.312 !script server_2 %::wserver
RAW.317 !script idle_2 %::idletime
RAW.318 !Script
RAW.313 <pre> 6³ Stat: 11..2:11...5 IRC Operator

LOAD !Script load_2
UNLOAD !Script unload_2

RAW.353 !Script nam_2 %::chan %::text
RAW.366 !Script


CLINEOP 6
CLINEVOICE 6
CLINEREGULAR 9
CLINEOWNER 4
CLINEME 5
CLINECHAROP 6@
CLINECHARVOICE 6+
CLINECHARREGULAR
CLINEIRCOP 4


;-------------


[Scheme7]
RGBCOLORS 210,225,251 0,0,0 97,130,94 0,144,0 255,0,0 175,155,124 159,121,96 255,128,0 255,255,0 82,115,77 194,172,150 227,221,210 159,175,188 186,131,131 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,11,9,11,5,15,6,11
FONTDEFAULT Terminal,12
FONTCHAN Terminal,12
FONTQUERY Terminal,12
PREFIX 12ú10ú

TEXTCHAN !script textchan2 %::nick %::cmode %::text
TEXTCHANSELF !script textchan_me2 %::me %::cmode %::text 
TEXTQUERY !script textq2 %::nick %::text
TEXTQUERYSELF !script textq_me2 %::nick %::text

ACTIONCHAN !script action_2 %::nick %::text
ACTIONCHANSELF !script action_2 %::nick %::text
ACTIONQUERY !script action_2 %::nick %::text
ACTIONQUERYSELF !script action_2 %::nick %::text

CTCPSELF !script ctcp_s2 a %::nick %::ctcp %::text
CTCPREPLY !script ctcp_s2 b %::nick %::ctcp %::text
CTCPREPLYSELF !script ctcp_rs2 %::ctcp %::text
CTCPCHAN !script ctcp_c2 a %::nick %::chan %::ctcp %::text
CTCPCHANSELF !script ctcp_c2 b %::chan %::ctcp %::text
CTCP !script ctc_p2 %::nick %::ctcp %::text

JOIN 12¯10¯ 2[13Join2]11 .......2 [12<nick>2] [<address>]
JOINSELF 12¯10¯ 2[13Join2]11 .......12 Joining 2[13<chan>2]

KICK 12ý10ý 9[5Kick9]11 .......5 <nick> kick <knick> 2[9<chan>2] 2[9<text>2]
KICKSELF 12ý10ý 9[5Kick9]11 .......5 You have been kicked by <nick> from 2[9<chan>2] 2[9<text>2] 

NICK 12ð10ð 2[13Nick2]11 .......6 <nick> changes nick to 9[5<newnick>9]
NICKSELF 12ð10ð 2[13Nick2]11 .......6 Your new nick is 9[5<newnick>9]  

NOTICECHAN !script noti_c2 a %::nick %::chan %::text
NOTICESELFCHAN !script noti_c2 b %::chan %::text
NOTICE !script noti_n2 a %::nick %::text
NOTICESELF !script noti_n2 b %::text

NOTIFY !Script Noti_f2 a %::nick %::address %::text
UNOTIFY !Script Noti_f2 b %::nick %::address %::text

PART 12®10® 2[13Part2]11 ....... 6<nick> 2[13<address>2]
QUIT 12®10® 2[13Quit2]11 ....... 6<nick> 2[13<address>2] 2[5<text>2]

RAW.332 !Script topic_2 %::text
RAW.333 !Script toset_2 %::nick %::text
RAW.311 !script whois_2 %::nick %::address %::realname
RAW.319 !script chan_2 %::chan

RAW.312 !script server_2 %::wserver
RAW.317 !script idle_2 %::idletime
RAW.318 !Script
RAW.313 <pre> 6³ Stat: 11..2:11...5 IRC Operator

LOAD !Script load_2
UNLOAD !Script unload_2

RAW.353 !Script nam_2 %::chan %::text
RAW.366 !Script


CLINEOP 6
CLINEVOICE 6
CLINEREGULAR 9
CLINEOWNER 4
CLINEME 5
CLINECHAROP 6@
CLINECHARVOICE 6+
CLINECHARREGULAR
CLINEIRCOP 4

;-------------


[Scheme8]

RGBCOLORS 210,225,251 0,0,0 88,109,124 0,144,0 255,0,0 130,172,171 129,142,154 255,128,0 255,255,0 0,113,113 118,154,190 212,212,212 137,177,153 67,152,167 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,11,9,11,5,15,6,11
FONTDEFAULT Terminal,12
FONTCHAN Terminal,12
FONTQUERY Terminal,12
PREFIX 12ú10ú

TEXTCHAN !script textchan2 %::nick %::cmode %::text
TEXTCHANSELF !script textchan_me2 %::me %::cmode %::text 
TEXTQUERY !script textq2 %::nick %::text
TEXTQUERYSELF !script textq_me2 %::nick %::text

ACTIONCHAN !script action_2 %::nick %::text
ACTIONCHANSELF !script action_2 %::nick %::text
ACTIONQUERY !script action_2 %::nick %::text
ACTIONQUERYSELF !script action_2 %::nick %::text

CTCPSELF !script ctcp_s2 a %::nick %::ctcp %::text
CTCPREPLY !script ctcp_s2 b %::nick %::ctcp %::text
CTCPREPLYSELF !script ctcp_rs2 %::ctcp %::text
CTCPCHAN !script ctcp_c2 a %::nick %::chan %::ctcp %::text
CTCPCHANSELF !script ctcp_c2 b %::chan %::ctcp %::text
CTCP !script ctc_p2 %::nick %::ctcp %::text

JOIN 12¯10¯ 2[13Join2]11 .......2 [12<nick>2] [<address>]
JOINSELF 12¯10¯ 2[13Join2]11 .......12 Joining 2[13<chan>2]

KICK 12ý10ý 9[5Kick9]11 .......5 <nick> kick <knick> 2[9<chan>2] 2[9<text>2]
KICKSELF 12ý10ý 9[5Kick9]11 .......5 You have been kicked by <nick> from 2[9<chan>2] 2[9<text>2] 

NICK 12ð10ð 2[13Nick2]11 .......6 <nick> changes nick to 9[5<newnick>9]
NICKSELF 12ð10ð 2[13Nick2]11 .......6 Your new nick is 9[5<newnick>9]  

NOTICECHAN !script noti_c2 a %::nick %::chan %::text
NOTICESELFCHAN !script noti_c2 b %::chan %::text
NOTICE !script noti_n2 a %::nick %::text
NOTICESELF !script noti_n2 b %::text

NOTIFY !Script Noti_f2 a %::nick %::address %::text
UNOTIFY !Script Noti_f2 b %::nick %::address %::text

PART 12®10® 2[13Part2]11 ....... 6<nick> 2[13<address>2]
QUIT 12®10® 2[13Quit2]11 ....... 6<nick> 2[13<address>2] 2[5<text>2]

RAW.332 !Script topic_2 %::text
RAW.333 !Script toset_2 %::nick %::text
RAW.311 !script whois_2 %::nick %::address %::realname
RAW.319 !script chan_2 %::chan

RAW.312 !script server_2 %::wserver
RAW.317 !script idle_2 %::idletime
RAW.318 !Script
RAW.313 <pre> 6³ Stat: 11..2:11...5 IRC Operator

LOAD !Script load_2
UNLOAD !Script unload_2

RAW.353 !Script nam_2 %::chan %::text
RAW.366 !Script


CLINEOP 6
CLINEVOICE 6
CLINEREGULAR 9
CLINEOWNER 4
CLINEME 5
CLINECHAROP 6@
CLINECHARVOICE 6+
CLINECHARREGULAR
CLINEIRCOP 4

;-------------


[Scheme9]

RGBCOLORS 210,225,251 0,0,0 88,109,124 0,144,0 255,0,0 130,172,171 129,142,154 255,128,0 255,255,0 0,113,113 118,154,190 0,0,0 137,177,153 67,152,167 128,128,128 208,208,208
COLORS 11,6,4,5,2,3,3,3,3,3,3,1,5,7,6,1,3,2,3,5,1,11,9,11,5,15,6,11
FONTDEFAULT Terminal,12
FONTCHAN Terminal,12
FONTQUERY Terminal,12
PREFIX 12ú10ú

TEXTCHAN !script textchan2 %::nick %::cmode %::text
TEXTCHANSELF !script textchan_me2 %::me %::cmode %::text 
TEXTQUERY !script textq2 %::nick %::text
TEXTQUERYSELF !script textq_me2 %::nick %::text

ACTIONCHAN !script action_2 %::nick %::text
ACTIONCHANSELF !script action_2 %::nick %::text
ACTIONQUERY !script action_2 %::nick %::text
ACTIONQUERYSELF !script action_2 %::nick %::text

CTCPSELF !script ctcp_s2 a %::nick %::ctcp %::text
CTCPREPLY !script ctcp_s2 b %::nick %::ctcp %::text
CTCPREPLYSELF !script ctcp_rs2 %::ctcp %::text
CTCPCHAN !script ctcp_c2 a %::nick %::chan %::ctcp %::text
CTCPCHANSELF !script ctcp_c2 b %::chan %::ctcp %::text
CTCP !script ctc_p2 %::nick %::ctcp %::text

JOIN 12¯10¯ 2[13Join2]11 .......2 [12<nick>2] [<address>]
JOINSELF 12¯10¯ 2[13Join2]11 .......12 Joining 2[13<chan>2]

KICK 12ý10ý 9[5Kick9]11 .......5 <nick> kick <knick> 2[9<chan>2] 2[9<text>2]
KICKSELF 12ý10ý 9[5Kick9]11 .......5 You have been kicked by <nick> from 2[9<chan>2] 2[9<text>2] 

NICK 12ð10ð 2[13Nick2]11 .......6 <nick> changes nick to 9[5<newnick>9]
NICKSELF 12ð10ð 2[13Nick2]11 .......6 Your new nick is 9[5<newnick>9]  

NOTICECHAN !script noti_c2 a %::nick %::chan %::text
NOTICESELFCHAN !script noti_c2 b %::chan %::text
NOTICE !script noti_n2 a %::nick %::text
NOTICESELF !script noti_n2 b %::text

NOTIFY !Script Noti_f2 a %::nick %::address %::text
UNOTIFY !Script Noti_f2 b %::nick %::address %::text

PART 12®10® 2[13Part2]11 ....... 6<nick> 2[13<address>2]
QUIT 12®10® 2[13Quit2]11 ....... 6<nick> 2[13<address>2] 2[5<text>2]

RAW.332 !Script topic_2 %::text
RAW.333 !Script toset_2 %::nick %::text
RAW.311 !script whois_2 %::nick %::address %::realname
RAW.319 !script chan_2 %::chan

RAW.312 !script server_2 %::wserver
RAW.317 !script idle_2 %::idletime
RAW.318 !Script
RAW.313 <pre> 6³ Stat: 11..2:11...5 IRC Operator

LOAD !Script load_2
UNLOAD !Script unload_2

RAW.353 !Script nam_2 %::chan %::text
RAW.366 !Script


CLINEOP 6
CLINEVOICE 6
CLINEREGULAR 9
CLINEOWNER 4
CLINEME 5
CLINECHAROP 6@
CLINECHARVOICE 6+
CLINECHARREGULAR
CLINEIRCOP 4