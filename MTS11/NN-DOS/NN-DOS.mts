[mts]
NAME dos
AUTHOR ost3go
EMAIL keinaenen@hotmail.com
SCRIPT NN-DOS.mrc
WEBSITE none
MTSVERSION 1.1
VERSION 1.1
DESCRIPTION DOS-styled MTS theme for any MTS engine

TIMESTAMP ON
TIMESTAMPFORMAT 15HH:nn:ss

COLORS 01,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,01,15,01,15,01
RBGCOLORS 255,255,255 0,0,0 104,116,136 105,135,112 196,96,96 115,115,115 134,98,125 187,138,102 183,166,106 98,157,102 111,140,129 88,167,163 94,100,162 221,221,221 140,140,140 192,192,192
BASECOLORS 05,14,15,13

FONTDEFAULT fixedsys,10
FONTQUERY fixedsys,10
FONTCHAN fixedsys,10

CLINEOWNER 00
CLINEOP 00
CLINEVOICE 15
CLINEHOP 15
CLINEREGULAR 14
CLINEENEMY 04
CLINEME 13
CLINECHAROWNER .
CLINECHAROP @
CLINECHARVOICE +
CLINECHARHOP %
CLINECHARREGULAR

PREFIX C:\
PARENTEXT \<text>>

TEXTCHAN <cmode><nick>: <text>
TEXTCHANSELF <cmode><me>: <text>
ACTIONCHAN * <cmode><nick> <text>
ACTIONCHANSELF * <cmode><me> <text>

NOTICECHAN <pre>NOTICE\<nick>\<chan><parentext>
NOTICE <pre>NOTICE\<nick>\<text>>
NOTICESELF Noticing <target> with data: <text>
NOTICESELFCHAN Noticing <target> with data: <text>

TEXTQUERY <nick>: <text>
TEXTQUERYSELF <me>: <text>
ACTIONQUERY * <nick> <text>
ACTIONQUERYSELF * <me> <text>
TEXTMSG <nick>: <text>
TEXTMSGSELF Messaging <target> with data: <text>

MODE <pre>Mode\<nick>\<modes>>
MODEUSER <pre>Mode\<nick>\<modes>>
JOIN <pre>Join\<nick>\<address>>
JOINSELF <pre>> Joining to <chan>: Done
PART <pre>Part\<nick>\<address><parentext>
KICK <pre>Kick\<nick>\kicked\<knick><parentext>
KICKSELF <pre>Kick\<nick>\kicked\<me><parentext>
QUIT <pre>Quit\<nick>!<address>> <text>
TOPIC <pre>Topic\<nick><parentext>
NICK <pre>Nick\<nick>\changed.to\<newnick>>
NICKSELF <pre>Nick\<me>\changed.to\<newnick>>
INVITE <pre>Invite\<nick>\to\<chan>>
SERVERERROR <pre>Error<parentext>
REJOIN <pre>Rejoining\<chan>>
CTCP <pre>CTCP\<nick>\<ctcp><pretext>
CTCPCHAN <pre>CTCP\<nick>@<chan>\<ctcp><pretext>
CTCPSELF Sending CTCP to <target> with data: <ctcp><parentext>
CTCPCHANSELF Sending CTCP to <target> with data: <ctcp><parentext>
CTCPREPLY <pre>CTCP.rpl\<nick>\<ctcp><parentext>
CTCPREPLYSELF Sending CTCP reply to <target> with data: <ctcp><parentext>
NOTIFY <pre>Online\<nick>>
UNOTIFY <pre>Offline\<nick>>
WALLOP <pre>Wallop\<nick><parentext>
NOTICESERVER <pre>Notice\Server\<nick><parentext>
DNS <pre> Resolving <address>:
DNSERROR <pre> Unable to resolve. (<address>)
DNSRESOLVE <pre> <address> = <raddress>
ECHO <pre>> <text>
ECHOTARGET <pre>> <text>
ERROR <pre>Error<parentext>
LOAD <pre>Dos.mts> loaded
UNLOAD <pre>Dos.mts> unloaded

WHOIS !script dos.whois
WHOWAS !script dos.whowas

RAW.002 Host = <server> with version <value>
RAW.003 Server creation time = <value>
RAW.005 Protocols supported = <text>
RAW.250 Connections = <value>
RAW.251 Users/Invisible = <users>/<text>
RAW.252 Operators online = <value>
RAW.253 Unknown connections = <value>
RAW.254 Channels = <value>
RAW.255 Local clients = <users> (on <value> server(s))
RAW.265 Local users/max = <users>/<value>
RAW.266 Global users/max = <users>/<value>
RAW.303 <pre>> <nick> is online.
RAW.315 /WHO end for <chan>
RAW.324 <pre>Modes\<chan>\<modes>>
RAW.329 !script %:echo %::pre Created on $asctime(%::text,dddd mmmm dd HH:nn:ss yyyy)
RAW.332 <pre>> Topic = <text>
RAW.333 <pre>> Set by <nick> @ <text>
RAW.341 <pre>> <nick> has been invited to <chan>
RAW.352 <pre>Who> <address>: <realname>
RAW.353 <pre>Names\<chan>> <text>
RAW.366 <pre>Names\<chan>\END>
RAW.369 !script
RAW.372 <pre><text>>
RAW.376 <pre>MOTD\end>
RAW.391 Current date is: <time>
RAW.401 <pre>> No such nick (<nick>)
RAW.403 <pre>> No such channel (<chan>)
RAW.404 <pre>> Error while sending data to: <chan>
RAW.421 '<value>' is not as an internal or external command, operable program or batch file.
RAW.433 <pre><nick>> Nickname is currently occupied
RAW.442 '<pre><channel>' doesn't exist
RAW.443 '<pre><nick>' can't copy
RAW.461 '<value>' The syntax of the command is incorrect.
RAW.471 <pre>Join\<chan>> ERROR! Full, +l
RAW.473 <pre>Join\<chan>> ERROR! Invite, +i
RAW.474 <pre>Join\<chan>> ERROR! Banned, +b
RAW.475 <pre>Join\<chan>> ERROR! Key, +k
RAW.482 <pre>> You have no operator status. (<chan>)
RAW.OTHER <pre>> <text>

