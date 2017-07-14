[mts]
Name Akd
Author [DaRkO]
MTSVersion 1.1
Version 1.5
EMAIL argweb@hotmail.com
DESCRIPTION ..*_* Newz schemes 
SCRIPT akade.mrc
Load 4Install Theme ... 
UNload 4Desinstall Theme ...

Prefix 5[2*5]
FontDefault Verdana,10
FontChan Verdana,10
FontQuey Verdana,10

Colors 0,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,2,0,2
RGBCOLORS 255,255,255 0,0,0 88,163,200 86,102,126 68,154,220 88,138,200 68,123,167 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208

Join <pre> 4Join <nick> in <chan> 5[2<address>5]
Quit <pre> 4Has left 2IRC4 <nick> 5[2<address>5]4: <text>
Topic <pre> 4<nick> sets topic : 5[2<chan> 6/\2 <text>5]
JoinSelf <pre> 4Now Talking in <chan>
TextChan 5(2<cmode><nick>5)4 <text>
TextChanSelf 5(2<cmode><me>5)4 <text>
Mode <pre> 4<nick> sets modes to : <modes>
TextQuery 2<cmode><nick>4 : <text>
TextQuerySelf 2<cmode><me>4 : <text>
Part <pre> 4Has left <chan> <nick> 5[2<address>5]4: <text>
Kick <pre> 5<knick> was kicked By <nick> 5[2<address>5]4: <text>
KickSelf <pre> 4You've been kicked by <nick> :5 <text> 
ModeUser <pre> 4Modes:4 <modes>
Nick <pre> 4<nick> is know as <newnick>
NickSelf <pre> 4Your nick new is <newnick>
Invite <pre> 4<nick> has invited you to join 2~ 4<chan>2 ~
ActionChan 6*** <nick> : <text>
ActionChanSelf 6*** <me> : <text>
Notify <pre> 5<nick> is online : 4<text>
UNotify <pre> 5<nick> is offline : 4<text>
NoticeChan <pre> 5~6 Notice 5[4<chan>5] 5~ 6 By <nick> : <text>
Notice <pre> 5~6 Notice By <nick> 5~6 : <text>
DNS <pre> 4Attempting to resolve <address>
DNSERROR 4Unable to resolve from <nick> 5[2<iaddress><naddress>5]
DNSRESOLVE 4Dns Resolve ... <nick>: 5[2<iaddress>5) 4named 5[2<naddress>5] resolved 5[2<raddress>5]

raw.375 <pre> 4Message of the day : <text>
raw.376 <pre> 4End of motd
raw.252 <pre> 4Operators Online: 5<value>
raw.254 <pre> 4Channels: 5<value>
raw.265 <pre> 4Local users: 5 <users> 
raw.432 <pre> 4<nick> 2: Erroneus Nickname
raw.433 <pre> 4<nick> 2: nick already in use
raw.441 <pre> 4<nick> 2: is not on 3<chan>
raw.442 <pre> 4You're not on 2<chan>
raw.443 <pre> 4<nick>  is already on 2<chan>
raw.332 <pre> 4Topic of <chan> :2 <text>
raw.333 <pre> 4Topic set by <nick> 
raw.311 !script w.s
raw.319 <pre> 4Channels:2 <chan>
raw.312 <pre> 4Server:2 <wserver> <serverinfo>  
raw.301 <pre> 4Away:2 $iif($away == $true,<text>,No away)
raw.317 !script i.s <idletime>
raw.318 !script e.w

scheme1 Red+
scheme2 Green+
scheme3 Grey+
scheme4 Orange+
scheme5 Red Final
scheme6 Orange Final
scheme7 Green Final
scheme8 Grey Final

[scheme1]
RGBCOLORS 255,255,255 0,0,0 233,0,0 86,102,126 187,46,0 132,46,0 134,37,0 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208
[scheme2]
RGBCOLORS 255,255,255 0,0,0 0,163,0 86,102,126 0,99,0 55,117,15 55,141,15 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208
[scheme3]
RGBCOLORS 255,255,255 0,0,0 171,169,165 86,102,126 193,180,174 178,174,167 156,165,174 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208
[scheme4]
RGBCOLORS 255,255,255 0,0,0 222,101,31 86,102,126 193,101,31 187,92,0 255,138,0 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208
[scheme5]
Colors 1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,2
RGBCOLORS 255,255,255 0,0,0 233,0,0 86,102,126 187,46,0 132,46,0 134,37,0 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208
[scheme6]
Colors 1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,2
RGBCOLORS 255,255,255 0,0,0 222,101,31 86,102,126 193,101,31 187,92,0 255,138,0 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208
[scheme7]
Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,0,1,0,0,2,0,2
RGBCOLORS 255,255,255 0,0,0 0,163,0 86,102,126 0,99,0 55,117,15 55,141,15 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208
[scheme8]
Colors 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,0,1,0,0,2,0,2
RGBCOLORS 255,255,255 0,0,0 171,169,165 86,102,126 193,180,174 178,174,167 156,165,174 255,128,0 255,255,0 0,255,0 0,144,144 215,200,64 99,108,182 255,0,255 134,154,176 208,208,208
