[mts]
NAME Minimalism
AUTHOR S3S
EMAIL P_ardillo@hotmail.com
DESCRIPTION Minimalist Theme, simple look.
WEBSITE 
MTSVERSION 1.1
VERSION 1.0
SCRIPT Minimalism.mrc
Scheme1 Timestamp 1
Scheme2 Timestamp 2
Scheme3 Black1
Scheme10 Green
Scheme4 Black2
Scheme5 Grey1
Scheme6 Grey2
Scheme7 Red
scheme8 Blue
scheme9 Brown
Scheme11 Black 1 Tstamp
scheme18 Green Tstamp
scheme12 Black 2 Tstamp
scheme13 Grey 1 Tstamp
scheme14 Grey 2 Tstamp
scheme15 Red Tstamp
scheme16 Blue Tstamp
scheme17 Brown Tstamp
PREFIX :<c2>
PARENTEXT <c2><text>
TIMESTAMP off
TIMESTAMPFORMAT HH:nn>
LOAD !script minimload 14
CTCPSELF CTCP to <nick><pre> <ctcp> <text>
CTCPREPLYSELF CTCP reply to <nick><pre> <ctcp> <text>
MODE <nick> sets mode<pre> <modes>
JOINSELF Now talking in<pre> <chan>
JOIN <nick> joins<pre> <address>
PART <nick> parts<pre> <address>  <text>
TEXTCHAN <cmode><nick>: <text>
TEXTQUERY <nick>: <text>
KICK <nick> kicks <knick><pre> <text>
KICKSELF <nick> kicks <knick><pre> <text>
QUIT <nick> quits<pre> <text>
TOPIC <nick> changes topic<pre> <text>
NICK <nick> is now<pre> <newnick>
NICKSELF <nick> is now<pre> <newnick>
TEXTCHANSELF <cmode><me>: <text>
TEXTQUERYSELF <me>: <text>
MODEUSER Change to mode<pre> <modes>
INVITE <nick> invites you to<pre> <chan> 
ACTIONCHAN - <cmode><nick> <text>
ACTIONQUERY - <nick> <text>
ACTIONCHANSELF - <cmode><me> <text>
ACTIONQUERYSELF - <me> <text>
CTCP <nick> (CTCP)<pre> <ctcp> <text>
CTCPCHAN <nick> (CTCP <chan>)<pre> <ctcp> <text>
CTCPREPLY <nick> (CTCP reply)<pre> <ctcp> <text>
NOTICESERVER <server> (notice)<pre> <text>
NOTICE <nick> (notice)<pre> <text>
NOTICECHAN <nick> (notice <chan>)<pre> <text>
NOTICESELF Notice to <nick><pre> <text>
NOTICESELFCHAN Notice to <nick><pre> <text>
NOTIFY Notify <nick><pre> Online
UNOTIFY Notify <nick><pre> Offline
COLORS  0,1,12,12,12,12,12,12,12,12,12,1,12,12,12,1,12,12,12,12,12,0,1,0,1,14,1,0
BASECOLORS 12,14,00,01
RGBCOLORS 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 223,223,0 0,215,0 0,147,147 0,221,221 0,0,252 255,0,255 90,90,90 210,210,210
FONTDEFAULT Courier New,12
FONTCHAN Courier New,12
FONTQUERY Courier New,12
WHOIS !script minimwhois
raw.251 Users online<pre> <users> and <text> invisible in <value> servers
raw.252 Operators online<pre> <value>
raw.253 Unknown connections<pre> <value>
raw.254 Channels<pre> <value>
raw.255 Clients<pre> <users> and <value> servers
raw.332 <chan> topic is<pre> <text>
raw.333 Set by<pre> <nick> on <text>
raw.401 <nick><pre> No such nick
raw.403 <chan><pre> No such channel
raw.404 <chan><pre> Cannot send to channel
raw.406 <nick><pre> There was no such nick
raw.421 <value><pre> Unknown command
raw.432 <nick><pre> Erroneus nickname
raw.433 <nick><pre> Already in use
raw.441 <nick><pre> Is not on <chan>
raw.442 <chan><pre> You're not there
raw.443 <nick><pre> Is already on <chan>
raw.471 <chan><pre> Channel is full
raw.473 <chan><pre> Invite only
raw.474 <chan><pre> You're banned
raw.475 <chan><pre> Correct key needed
raw.482 <chan><pre> You're not channel operator
raw.353 !script minimnames
raw.366 <chan><pre> <text>
raw.324
raw.329
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 01
CLineCharOwner .
CLineCharOP @
CLineCharHOP %
CLineCharVoice +
CLineCharRegular 
ECHO <c1><text>
ECHOTARGET <c1><text>
ERROR Error<pre> <text>
[scheme1]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn 
[scheme2]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn¦
[scheme3]
LOAD !script minimload 15
COLORS 1,0,11,11,11,11,11,11,11,11,11,0,11,11,11,0,11,11,11,11,11,1,0,1,0,15,0,1
RGBColors 240,240,240 0,0,0 0,111,221 63,162,49 206,51,51 148,99,58 146,131,197 252,127,0 216,212,0 0,220,0 72,148,152 0,216,208 102,134,219 199,97,197 104,104,104 184,184,184
BASECOLORS 11,15,01,00
CLINEOP 11
CLINEHOP 11
CLINEVOICE 11
CLINEREGULAR 15
[scheme10]
RGBColors 255,255,255 20,33,21 0,0,127 50,111,32 255,0,0 127,0,0 156,0,156 252,127,0 223,223,0 163,203,158 0,147,147 0,221,221 0,0,252 255,0,255 72,91,68 119,164,113
COLORS 9,1,3,3,3,3,3,3,3,3,3,1,3,3,3,1,3,3,3,3,3,9,1,9,1,14,1,9
LOAD !script minimload 14
CLINEOP 1
CLINEHOP 1CLINEVOICE 1
CLINEREGULAR 14
BASECOLORS 03,14,09,00
[scheme4]
LOAD !script minimload 15
COLORS 1,0,10,10,10,10,10,10,10,10,10,0,10,10,10,0,10,10,10,10,10,1,0,1,0,15,0,1
RGBColors 240,240,240 0,0,0 0,111,221 63,162,49 206,51,51 148,99,58 146,131,197 252,127,0 216,212,0 0,220,0 72,148,152 0,216,208 102,134,219 199,97,197 104,104,104 184,184,184
BASECOLORS 10,15,01,00
CLINEOP 10
CLINEHOP 10
CLINEVOICE 10
CLINEREGULAR 15
[scheme5]
COLORS 15,1,12,12,12,12,12,12,12,12,12,1,12,12,12,1,12,12,12,12,12,15,1,15,1,14,1,15
[scheme6]
COLORS 15,1,14,14,14,14,14,14,14,14,14,1,14,14,14,1,14,14,14,14,14,15,1,15,1,14,1,15
CLINEOP 1
CLINEHOP 1
CLINEVOICE 1
CLINEREGULAR 14
[scheme7]
RGBColors 253,203,196 0,0,0 0,0,127 0,147,0 248,26,7 127,0,0 156,0,156 252,127,0 223,223,0 0,215,0 0,147,147 0,221,221 0,0,252 255,0,255 90,90,90 210,210,210
COLORS 0,5,4,4,4,4,4,4,4,4,4,5,4,4,4,5,4,4,4,4,4,0,5,0,5,14,5,0
CLINEOP 4
CLINEHOP 4
CLINEVOICE 4
CLINEREGULAR 5
[scheme8]
RGBColors 189,204,232 0,0,0 0,0,127 0,147,0 248,26,7 127,0,0 156,0,156 252,127,0 223,223,0 0,215,0 0,147,147 0,221,221 0,0,252 255,0,255 51,77,130 140,157,168
COLORS 0,2,12,12,12,12,12,12,12,12,12,2,12,12,12,2,12,12,12,12,12,0,2,0,2,15,2,0
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 2
[scheme9]
RGBColors 190,180,156 0,0,0 0,0,127 0,147,0 150,103,69 68,62,53 156,0,156 252,127,0 223,223,0 0,215,0 0,147,147 0,221,221 0,0,252 255,0,255 116,89,63 130,124,131
COLORS 0,5,4,4,4,4,4,4,4,4,4,5,4,4,4,5,4,4,4,4,4,0,5,0,14,15,14,0
CLINEOP 4
CLINEHOP 4
CLINEVOICE 4
CLINEREGULAR 14
;---
[scheme11]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn 
LOAD !script minimload 15
COLORS 1,0,11,11,11,11,11,11,11,11,11,0,11,11,11,0,11,11,11,11,11,1,0,1,0,15,0,1
RGBColors 240,240,240 0,0,0 0,111,221 63,162,49 206,51,51 148,99,58 146,131,197 252,127,0 216,212,0 0,220,0 72,148,152 0,216,208 102,134,219 199,97,197 104,104,104 184,184,184
BASECOLORS 11,15,01,00
CLINEOP 11
CLINEHOP 11
CLINEVOICE 11
CLINEREGULAR 15
[scheme18]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn 
RGBColors 255,255,255 20,33,21 0,0,127 50,111,32 255,0,0 127,0,0 156,0,156 252,127,0 223,223,0 163,203,158 0,147,147 0,221,221 0,0,252 255,0,255 72,91,68 119,164,113
COLORS 9,1,3,3,3,3,3,3,3,3,3,1,3,3,3,1,3,3,3,3,3,9,1,9,1,14,1,9
LOAD !script minimload 14
CLINEOP 1
CLINEHOP 1
CLINEVOICE 1
CLINEREGULAR 14
BASECOLORS 03,14,09,00
[scheme12]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn 
LOAD !script minimload 15
COLORS 1,0,10,10,10,10,10,10,10,10,10,0,10,10,10,0,10,10,10,10,10,1,0,1,0,15,0,1
RGBColors 240,240,240 0,0,0 0,111,221 63,162,49 206,51,51 148,99,58 146,131,197 252,127,0 216,212,0 0,220,0 72,148,152 0,216,208 102,134,219 199,97,197 104,104,104 184,184,184
BASECOLORS 10,15,01,00
CLINEOP 10
CLINEHOP 10
CLINEVOICE 10
CLINEREGULAR 15
[scheme13]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn 
COLORS 15,1,12,12,12,12,12,12,12,12,12,1,12,12,12,1,12,12,12,12,12,15,1,15,1,14,1,15
[scheme14]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn 
COLORS 15,1,14,14,14,14,14,14,14,14,14,1,14,14,14,1,14,14,14,14,14,15,1,15,1,14,1,15
CLINEOP 1
CLINEHOP 1
CLINEVOICE 1
CLINEREGULAR 14
[scheme15]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn 
RGBColors 253,203,196 0,0,0 0,0,127 0,147,0 248,26,7 127,0,0 156,0,156 252,127,0 223,223,0 0,215,0 0,147,147 0,221,221 0,0,252 255,0,255 90,90,90 210,210,210
COLORS 0,5,4,4,4,4,4,4,4,4,4,5,4,4,4,5,4,4,4,4,4,0,5,0,5,14,5,0
CLINEOP 4
CLINEHOP 4
CLINEVOICE 4
CLINEREGULAR 5
[scheme16]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn 
RGBColors 189,204,232 0,0,0 0,0,127 0,147,0 248,26,7 127,0,0 156,0,156 252,127,0 223,223,0 0,215,0 0,147,147 0,221,221 0,0,252 255,0,255 51,77,130 140,157,168
COLORS 0,2,12,12,12,12,12,12,12,12,12,2,12,12,12,2,12,12,12,12,12,0,2,0,2,15,2,0
CLINEOP 12
CLINEHOP 12
CLINEVOICE 12
CLINEREGULAR 2
[scheme17]
TIMESTAMP ON
TIMESTAMPFORMAT HH:nn 
RGBColors 190,180,156 0,0,0 0,0,127 0,147,0 150,103,69 68,62,53 156,0,156 252,127,0 223,223,0 0,215,0 0,147,147 0,221,221 0,0,252 255,0,255 116,89,63 130,124,131
COLORS 0,5,4,4,4,4,4,4,4,4,4,5,4,4,4,5,4,4,4,4,4,0,5,0,14,15,14,0
CLINEOP 4
CLINEHOP 4
CLINEVOICE 4
CLINEREGULAR 14
