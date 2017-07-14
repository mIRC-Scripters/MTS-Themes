[mts]
NAME Faint Theme
AUTHOR sreid
EMAIL sreid@ciphering.net
DESCRIPTION Faint Theme, 17 schemes, uses IBMPC..
WEBSITE http://www.ciphering.net/
MTSVERSION 1.10
VERSION v1.5
PREFIX :::
SCRIPT faint.mrc
LOAD !script faint.load


COLORS 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 113,162,215 73,126,158 128,128,128 208,208,208


FONTDEFAULT ibmpc,10
FONTCHAN ibmpc,10
FONTQUERY ibmpc,10


SCHEME1 Flux
SCHEME2 Flare
SCHEME3 Copper

SCHEME4 Reptile
SCHEME5 Grayscale
SCHEME6 Faint 2

SCHEME7 Army Green
SCHEME8 Caution
SCHEME9 Turquoise

SCHEME10 Purple
SCHEME11 Pale
SCHEME12 Baby Blue

SCHEME13 ICE
SCHEME14 Peachy
SCHEME15 Light Green

SCHEME16 Caution 2
SCHEME17 Faint 3

TEXTCHAN !script %:echo $+(12,%::cmode,,%::nick,:12,$chr(32),$strip(%::text,c),)
TEXTQUERY !script %:echo $+(12,%::nick,:12,$chr(32),$strip(%::text,c),)
TEXTCHANSELF !script %:echo $+(%::cmode,12,%::nick,:,$chr(32),$strip(%::text,c))
TEXTQUERYSELF !script %:echo $+(12,%::nick,:,$chr(32),$strip(%::text,c))
ACTIONCHAN !script %:echo $+(* 12,%::cmode,,%::nick,:12,$chr(32),$strip(%::text,c),)
ACTIONQUERY !script %:echo $+(*,$chr(32),%::nick,:,$chr(32),12,$strip(%::text,c),)
ACTIONCHANSELF !script %:echo $+(*,$chr(32),12,%::nick,,:,$chr(32),$strip(%::text,c))
ACTIONQUERYSELF !script %:echo $+(*,$chr(32),12,%::nick,,:,$chr(32),$strip(%::text,c))
TextMsg !script %:echo $+(12,%::nick,,:,$chr(32),$strip(%::text,c))
TextMsgSelf !script %:echo $+(12,%::nick,,:,$chr(32),$strip(%::text,c))


MODE * <nick> Set Mode12 <modes>
MODEUSER ! self mode 12<modes>


JOIN >>> 12<nick> (12<address>) Joined12 <chan>
JOINSELF >>> Joining 12<chan>
PART !script %:echo <<< $+(12,%::nick,) $+($chr(40),12,%::address,,$chr(41)) Parted $+(12,$strip(%::text,c),)
KICK <<< 12<nick> Kicked 12<knick> (12<text>)
KICKSELF <<< 12<nick> Kicked 12<knick> (12<text>)
QUIT <<< 12<nick> (12<address>) Quit IRC (12<text>)


TOPIC ÷ 12<nick> topic set as 12<text>
NICK <pre> 12<nick> is known as 12<newnick>
INVITE ! you were invited to 12<chan> by 12<nick>
NICKSELF <pre> 12<nick> is known as 12<newnick>
SERVERERROR ! Server Error ¯ 12<text>


CTCP !script %:echo ­ CTCP $+(12,%::nick,) ¯ $+(12,$strip(%::ctcp,c),)
CTCPCHAN !script %:echo ­ CTCP $+(12,%::chan,$chr(32),%::nick,) ¯ $+(12,$strip(%::text,c),)
CTCPREPLY !script %:echo ­ CTCP $+(12,%::nick,) ¯ $+(12,$strip(%::text,c),)
CTCPSELF !script %:echo ­ CTCP $+(12,%::nick,) ¯ $+(12,$strip(%::ctcp,c),)
CTCPREPLYSELF ­ CTCP 12<nick> ¯ 12<ctcp>

DNS +++ 12DNS: Looking up 12<address>....
DNSError +++ 12DNS: Error, unable to resolve...
DNSResolve +++ 12DNS:12 <iaddress> -<gt> 12<naddress>


NOTICESERVER !script haltdef
NOTICE !script %:echo­  NOTICE $+(12,%::nick,) ¯ $+(12,$strip(%::text,c),)
NOTICECHAN !script %:echo­  NOTICE $+(12,%::chan>,$chr(32),%::nick,) ¯ $+(12,$strip(%::text,c),)
NOTICESELF !script %:echo­  NOTICE $+(12,%::nick,) ¯ $+(12,$strip(%::text,c),)
NOTICESELFCHAN !script %:echo­  NOTICE $+(12,%::chan,) ¯ $+(12,$strip(%::text,c),)


NOTIFY 12<nick> is now Online 12<text>
UNOTIFY 12<nick> is now Offline 12<text>


raw.324 !script haltdef
raw.329 !script haltdef
raw.315 !script haltdef
raw.353 !script haltdef
raw.366 !script haltdef
raw.401 !script haltdef
raw.251 12<users> users and 12<text> invisible users on 12<value> servers
raw.252 12<value> operators online
raw.253 12<value> total unknown connections
raw.254 12<value> channels formed
raw.255 12<users> users on 12<value> servers
raw.332 ÷ topic 12<text>
raw.333 ÷ topic set by 12<nick> 
raw.352 ­ 12<nick> (12<address>) is 12<realname>
raw.305 you are no longer marked as being away
raw.306 you are now marked as being away
raw.403 ! 12<chan> no such chan
raw.404 ! cannot send text to 12<chan>
raw.405 ! cannot join 12<chan> server limit exceeded
raw.406 ! there was no such nick 12<nick>
raw.421 !script %:echo unknown command $+(12,/,$lower(%::value),)
raw.432 ! 12<nick> invalid nickname wrong characters
raw.433 ! 12<nick> is already in use
raw.311 !script whois.start
raw.319 !script whois.chan
raw.312 !script whois.serv
raw.301 !script whois.away
raw.317 !script whois.idle
raw.307 !script whois.stat
raw.313 !script whois.type
raw.318 !script whois.end
raw.436 ! 12<nick> has suffered a nick collision
raw.438 ! nick change too fast.. wait a while
raw.439 ! nick change too fast.. wait a while
raw.441 ! 12<nick> is not on 12<chan>
raw.442 ! you're not on 12<chan>
raw.443 ! 12<nick> is already on 12<chan>
raw.461 ? insufficient parameters <text>
raw.465 ! you are currently banned from this server
raw.467 * cannot join 12<chan> +k
raw.471 * cannot join 12<chan> +l
raw.472 ? 12<text> is an unknown character
raw.473 * cannot join 12<chan> +i
raw.474 * cannot join 12<chan> +b
raw.475 * cannot join 12<chan> incorrect key
raw.478 ! 12<text> cannot ban 12<chan> ban list is full
raw.482 ! you are not a operator in 1<chan>
raw.511 ! your silence list is full
raw.327 <text>
raw.other <text>
TIMESTAMP ON
TIMESTAMPFORMAT (12hh:nn)
CLINEOP 12
CLINEHOP 0
CLINEVOICE 15
CLINEREGULAR 0
CLINEOWNER 0
CLINEENEMY 0
CLINEFRIEND 12
CLINEME 12

CLINECHAROWNER .
CLINECHAROP @
CLINECHARHOP %
CLINECHARVOICE +
CLINECHARREGULAR


[scheme1]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 139,188,151 73,126,158 128,128,128 208,208,208

[scheme2]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 247,81,81 73,126,158 128,128,128 208,208,208

[scheme3]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 180,175,148 73,126,158 128,128,128 208,208,208

[scheme3]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 180,175,148 73,126,158 128,128,128 208,208,208

[scheme4]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 152,226,107 73,126,158 128,128,128 208,208,208

[scheme5]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 192,192,192 73,126,158 128,128,128 208,208,208

[scheme6]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 51,114,183 73,126,158 128,128,128 208,208,208

[scheme7]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 99,135,102 73,126,158 128,128,128 208,208,208

[scheme8]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 220,210,91 73,126,158 128,128,128 208,208,208

[scheme9]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 9,157,150 73,126,158 128,128,128 208,208,208

[scheme10]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 148,153,199 73,126,158 128,128,128 208,208,208

[scheme11]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 154,192,191 73,126,158 128,128,128 208,208,208

[scheme12]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 92,157,254 73,126,158 128,128,128 208,208,208

[scheme13]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 176,208,255 73,126,158 128,128,128 208,208,208

[scheme14]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 254,150,139 73,126,158 128,128,128 208,208,208

[scheme15]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 193,255,209 73,126,158 128,128,128 208,208,208

[scheme16]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 239,235,180 73,126,158 128,128,128 208,208,208

[scheme17]
RGBCOLORS 255,255,255 0,0,0 0,0,128 0,144,0 255,0,0 128,0,0 160,0,160 255,128,0 255,255,0 0,255,0 0,144,144 0,255,255 86,123,156 73,126,158 128,128,128 208,208,208
