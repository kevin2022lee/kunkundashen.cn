
function keyDownTextField(e){1==scrambler&&1==listenToKeyboardRotations&&(70==e[_0xea18[5]]&&(updateA(),ff(),updateCube()),82==e[_0xea18[5]]&&(updateA(),rr(),updateCube()),85==e[_0xea18

[5]]&&(updateA(),uu(),updateCube()),66==e[_0xea18[5]]&&(updateA(),bb(),updateCube()),76==e[_0xea18[5]]&&(updateA(),ll(),updateCube()),68==e[_0xea18[5]]&&(updateA(),dd(),updateCube()),37==e

[_0xea18[5]]&&turnLeft(),39==e[_0xea18[5]]&&turnRight())}function initVariables(){var e=_0xea18[6];for(i=0;i<=40;i++)mess[i]=$(_0xea18[8]+i)[_0xea18[7]](),e=e+_0xea18[9]+i+_0xea18[10]+mess

[i]+_0xea18[11];if(e+=_0xea18[12],$(_0xea18[13])[_0xea18[7]](e),setLanguagePack(),0!=$(_0xea18[15])[_0xea18[14]])a[0]=0,scrambler=1,window[_0xea18[16]](function(){refreshSolveLink

()},300);else if(void 0==(urlkocka=getUrlVars()[_0xea18[17]])){urlkocka=_0xea18[18];var s=mess[15]+_0xea18[19]+_0xea18[20]+mess[0]+_0xea18[21]+mess[11]+_0xea18[22];warning(mess[22],s)}else

{for($(_0xea18[27])[_0xea18[26]](function(){$(this)[_0xea18[24]](_0xea18[23],$(this)[_0xea18[24]](_0xea18[23])+_0xea18[25]+urlkocka)}),a=urlkocka[_0xea18[29]](_0xea18[28]),i=1;i<=54;i++)

orig[i]=a[i];center[0]=0,center[1]=a[5],center[2]=a[14],center[3]=a[23],center[4]=a[32],center[5]=a[41],center[6]=a[50],loadingPercentage(),updateCube();var _=0;for(i=1;i<=54;i++)(_=a[i])

==center[1]&&(a[i]=1),_==center[2]&&(a[i]=2),_==center[3]&&(a[i]=3),_==center[4]&&(a[i]=4),_==center[5]&&(a[i]=5),_==center[6]&&(a[i]=6);worker[_0xea18[31]]({type:_0xea18

[30]}),kociembaFieldsTransform()}}function loadingPercentage(){setTimeout(function(){++loadingPercent<99&&loadingPercentage(),$(_0xea18[34])[_0xea18[33]](loadingPercent+_0xea18[32]),

$(_0xea18[34])[_0xea18[7]](loadingPercent+_0xea18[32])},Math[_0xea18[36]](30*Math[_0xea18[35]]())+10*loadingPercent)}function rekurzivSolutionPlayback(){aktstep<osszlepesszam?eddigkiir

(aktstep+1):($(_0xea18[38])[_0xea18[37]](),$(_0xea18[40])[_0xea18[37]](_0xea18[39])),setTimeout(function(){1==playingBackTheSolution&&rekurzivSolutionPlayback()},Math[_0xea18[41]]

(cubeplaybackspeed))}function eddigkiir(e){0==playingBackTheSolution&&$(_0xea18[40])[_0xea18[37]](_0xea18[39]),aktstep=e;var s=_0xea18[42];for(1==step[e]&&(s=_0xea18[43]),2==step[e]&&

(s=_0xea18[44]),3==step[e]&&(s=_0xea18[45]),4==step[e]&&(s=_0xea18[46]),5==step[e]&&(s=_0xea18[47]),6==step[e]&&(s=_0xea18[48]),7==step[e]&&(s=_0xea18[49]),8==step[e]&&(s=_0xea18

[50]),9==step[e]&&(s=_0xea18[51]),10==step[e]&&(s=_0xea18[52]),11==step[e]&&(s=_0xea18[53]),12==step[e]&&(s=_0xea18[54]),13==step[e]&&(s=_0xea18[55]),14==step[e]&&(s=_0xea18[56]),15==step

[e]&&(s=_0xea18[57]),16==step[e]&&(s=_0xea18[58]),17==step[e]&&(s=_0xea18[59]),18==step[e]&&(s=_0xea18[60]),document[_0xea18[63]](_0xea18[62])[_0xea18[61]]=e+_0xea18[64]+s+_0xea18

[65],0==e&&(document[_0xea18[63]](_0xea18[62])[_0xea18[61]]=_0xea18[66]),step[e]>12?e>0&&$(_0xea18[68])[_0xea18[67]]():$(_0xea18[68])[_0xea18[69]](),$(_0xea18[71]+elozorot)[_0xea18[37]]

(_0xea18[70]),$(_0xea18[71]+e)[_0xea18[72]](_0xea18[70]),elozorot=e,step[0]=0,i=1;i<=54;i++)kics[i]=orig[i];for(ij=0;ij<=e;ij++)1==step[ij]&&kicsiuu(),2==step[ij]&&kicsiui(),3==step[ij]

&&kicsill(),4==step[ij]&&kicsili(),5==step[ij]&&kicsiff(),6==step[ij]&&kicsifi(),7==step[ij]&&kicsirr(),8==step[ij]&&kicsiri(),9==step[ij]&&kicsibb(),10==step[ij]&&kicsibi(),11==step[ij]

&&kicsidd(),12==step[ij]&&kicsidi(),13==step[ij]&&(kicsiuu(),kicsiuu()),14==step[ij]&&(kicsill(),kicsill()),15==step[ij]&&(kicsiff(),kicsiff()),16==step[ij]&&(kicsirr(),kicsirr()),17==step

[ij]&&(kicsibb(),kicsibb()),18==step[ij]&&(kicsidd(),kicsidd());for(i=1;i<=54;i++)a[i]=kics[i];if($(_0xea18[38])[_0xea18[37]](),$(_0xea18[38])[_0xea18[72]](_0xea18[73]+step

[e]),1==playingBackTheSolution)setTimeout(function(){for(updateCube(),i=1;i<=54;i++)a[i]=orig[i]},Math[_0xea18[41]](cubeplaybackspeed/5)),setTimeout(function(){1==playingBackTheSolution&&

($(_0xea18[38])[_0xea18[37]](),$(_0xea18[68])[_0xea18[69]]())},Math[_0xea18[41]](4*cubeplaybackspeed/5));else for(updateCube(),i=1;i<=54;i++)a[i]=orig[i]}function kiirarrayt(){setTimeout

(function(){document[_0xea18[63]](_0xea18[75])[_0xea18[74]]?$(_0xea18[77])[_0xea18[76]](500):($(_0xea18[79])[_0xea18[72]](_0xea18[78]),document[_0xea18[63]](_0xea18[75])[_0xea18[61]]

=_0xea18[80]+mess[30]+_0xea18[81]+mess[27]+_0xea18[82]+mess[39]+_0xea18[83])},3e3),document[_0xea18[63]](_0xea18[84])[_0xea18[61]]=_0xea18[85]+stp+_0xea18[86]+mess[7]+_0xea18

[87],osszlepesszam=stp;var e=_0xea18[88];for(i=1;i<=stp;i++)-1==String(document[_0xea18[91]])[_0xea18[90]](_0xea18[89])&&step[i]<16&&(step[i]=step[i]+1),1==step[i]&&(e=_0xea18[43]),2==step

[i]&&(e=_0xea18[92]),3==step[i]&&(e=_0xea18[45]),4==step[i]&&(e=_0xea18[93]),5==step[i]&&(e=_0xea18[47]),6==step[i]&&(e=_0xea18[94]),7==step[i]&&(e=_0xea18[49]),8==step[i]&&(e=_0xea18

[95]),9==step[i]&&(e=_0xea18[51]),10==step[i]&&(e=_0xea18[96]),11==step[i]&&(e=_0xea18[53]),12==step[i]&&(e=_0xea18[97]),13==step[i]&&(e=_0xea18[55]),14==step[i]&&(e=_0xea18[56]),15==step

[i]&&(e=_0xea18[57]),16==step[i]&&(e=_0xea18[58]),17==step[i]&&(e=_0xea18[59]),18==step[i]&&(e=_0xea18[60]),document[_0xea18[63]](_0xea18[84])[_0xea18[61]]=document[_0xea18[63]](_0xea18

[84])[_0xea18[61]]+_0xea18[98]+i+_0xea18[99]+i+_0xea18[100]+e+_0xea18[65];kiirStepByStep()}function kiirStepByStep(){for(var e,a=1;a<=54;a++)sbs[a]=orig[a];kiirSbs(0,0,mess[37]);for(var 

s=1;s<=osszlepesszam;s++)1==step[s]&&(e=_0xea18[43]),2==step[s]&&(e=_0xea18[92]),3==step[s]&&(e=_0xea18[45]),4==step[s]&&(e=_0xea18[93]),5==step[s]&&(e=_0xea18[47]),6==step[s]&&(e=_0xea18

[94]),7==step[s]&&(e=_0xea18[49]),8==step[s]&&(e=_0xea18[95]),9==step[s]&&(e=_0xea18[51]),10==step[s]&&(e=_0xea18[96]),11==step[s]&&(e=_0xea18[53]),12==step[s]&&(e=_0xea18[97]),13==step[s]

&&(e=_0xea18[55]),14==step[s]&&(e=_0xea18[56]),15==step[s]&&(e=_0xea18[57]),16==step[s]&&(e=_0xea18[58]),17==step[s]&&(e=_0xea18[59]),18==step[s]&&(e=_0xea18[60]),kiirSbs(s,step

[s],e),1==step[s]&&sbsuu(),2==step[s]&&sbsui(),3==step[s]&&sbsll(),4==step[s]&&sbsli(),5==step[s]&&sbsff(),6==step[s]&&sbsfi(),7==step[s]&&sbsrr(),8==step[s]&&sbsri(),9==step[s]&&sbsbb

(),10==step[s]&&sbsbi(),11==step[s]&&sbsdd(),12==step[s]&&sbsdi(),13==step[s]&&(sbsuu(),sbsuu()),14==step[s]&&(sbsll(),sbsll()),15==step[s]&&(sbsff(),sbsff()),16==step[s]&&(sbsrr(),sbsrr

()),17==step[s]&&(sbsbb(),sbsbb()),18==step[s]&&(sbsdd(),sbsdd());kiirSbs(0,0,mess[38])}function setLanguagePack(){$(_0xea18[102])[_0xea18[7]](mess[19]+_0xea18[101]),$(_0xea18[103])

[_0xea18[7]](mess[20]+_0xea18[101]),$(_0xea18[104])[_0xea18[7]](mess[21]+_0xea18[101]),$(_0xea18[105])[_0xea18[7]](mess[16]+_0xea18[101]),$(_0xea18[108])[_0xea18[24]](_0xea18[106],mess

[21]+_0xea18[107]),$(_0xea18[109])[_0xea18[7]](mess[23]),$(_0xea18[111])[_0xea18[7]](_0xea18[110]+mess[25]),$(_0xea18[112])[_0xea18[24]](_0xea18[23],mess[24]),$(_0xea18[112])[_0xea18[24]]

(_0xea18[113],mess[25]),$(_0xea18[114])[_0xea18[7]](mess[28]),$(_0xea18[115])[_0xea18[7]](mess[29]),mess[0][_0xea18[14]]>0&&($(_0xea18[117])[_0xea18[24]](_0xea18[23],_0xea18[116]+mess

[0]+_0xea18[116]),$(_0xea18[117])[_0xea18[7]](_0xea18[101]+mess[11]))}function kiirSbs(e,a,s){var _,x,i=_0xea18[118]+e+_0xea18[21]+e+_0xea18[119]+s+_0xea18[120];for(_=1;_<=9;_++)i=i

+_0xea18[121]+_+_0xea18[122]+sbs[_]+_0xea18[21]+_+_0xea18[123];for(_=19;_<=27;_++)i=i+_0xea18[124]+_+_0xea18[122]+sbs[_]+_0xea18[21]+_+_0xea18[123];for(_=28;_<=36;_++)i=i+_0xea18[125]+_

+_0xea18[122]+sbs[_]+_0xea18[21]+_+_0xea18[123];i+=_0xea18[123],x=_0xea18[66],a>12&&(x=_0xea18[126]),i=i+_0xea18[127]+a+_0xea18[21]+x+_0xea18[128],document[_0xea18[63]](_0xea18[129])

[_0xea18[61]]=document[_0xea18[63]](_0xea18[129])[_0xea18[61]]+i}function kociembaFieldsTransform(){var e=_0xea18[28],s=new Array,_=new Array,x=

[0,1,2,3,4,5,6,7,8,9,37,38,39,40,41,42,43,44,45,19,20,21,22,23,24,25,26,27,10,11,12,13,14,15,16,17,18,46,47,48,49,50,51,52,53,54,28,29,30,31,32,33,34,35,36];for(kind=1;kind<=54;kind++)s

[kind]=0,1==a[kind]&&(s[kind]=_0xea18[43]),2==a[kind]&&(s[kind]=_0xea18[45]),3==a[kind]&&(s[kind]=_0xea18[47]),4==a[kind]&&(s[kind]=_0xea18[49]),5==a[kind]&&(s[kind]=_0xea18[51]),6==a

[kind]&&(s[kind]=_0xea18[53]);for(kind=1;kind<=54;kind++)_[x[kind]]=s[kind];for(kind=1;kind<=54;kind++)e+=s[kind];for(e=_0xea18[28],kind=1;kind<=54;kind++)e+=_[kind];$(_0xea18[131])

[_0xea18[130]](e)}function warning(e,a){document[_0xea18[63]](_0xea18[132])[_0xea18[61]]=_0xea18[133]+e+_0xea18[134],document[_0xea18[63]](_0xea18[132])[_0xea18[61]]+=a,$(_0xea18[136])

[_0xea18[135]](300),$(_0xea18[137])[_0xea18[69]]()}function getUrlVars(){var e={};window[_0xea18[139]][_0xea18[23]][_0xea18[138]](/[?&]+([^=&]+)=([^&]*)/gi,function(a,s,_){e[s]=_});return 

e}function refreshSolveLink(){updateA(),error=_0xea18[2];o=1;for(c=1;c<=9;c++)1==a[c]&&2==a[c+9]&&3==a[c+18]&&4==a[c+27]&&5==a[c+36]&&6==a[c+45]||(o=0);1==o&&(error=mess[15]);var 

e=0,s=0,_=0,x=0,i=0,t=0;for(c=1;c<=54;c++)1==a[c]&&e++,2==a[c]&&s++,3==a[c]&&_++,4==a[c]&&x++,5==a[c]&&i++,6==a[c]&&t++;for(9==e&&9==s&&9==_&&9==x&&9==i&&9==t||(error=mess[1]+_0xea18

[219],9!=e&&(error+=mess[31]+_0xea18[220]+e+_0xea18[221]),9!=s&&(error+=mess[32]+_0xea18[220]+s+_0xea18[221]),9!=_&&(error+=mess[33]+_0xea18[220]+_+_0xea18[221]),9!=x&&(error+=mess

[34]+_0xea18[220]+x+_0xea18[221]),9!=i&&(error+=mess[35]+_0xea18[220]+i+_0xea18[221]),9!=t&&(error+=mess[36]+_0xea18[220]+t+_0xea18[221])),e=0,s=0,_=0,x=0,i=0,t=0,c=1;c<=9;c++)1==a[9*c-4]

&&e++,2==a[9*c-4]&&s++,3==a[9*c-4]&&_++,4==a[9*c-4]&&x++,5==a[9*c-4]&&i++,6==a[9*c-4]&&t++;e*s*_*x*i*t!=1&&(error=mess[18]+_0xea18[222],e>1&&(error+=mess[31]+_0xea18[223]+e+_0xea18

[224]),s>2&&(error+=mess[32]+_0xea18[223]+s+_0xea18[224]),_>3&&(error+=mess[33]+_0xea18[223]+_+_0xea18[224]),x>4&&(error+=mess[34]+_0xea18[223]+x+_0xea18[224]),i>5&&(error+=mess

[35]+_0xea18[223]+i+_0xea18[224]),t>6&&(error+=mess[36]+_0xea18[223]+t+_0xea18[224]));var o=0;for(c=1;c<=54;c++)0==a[c]&&o++;o>=1&&(error=mess[26]+_0xea18[225]+o+_0xea18[226]);var r=window

[_0xea18[139]][_0xea18[23]][_0xea18[138]](_0xea18[169],_0xea18[28])+_0xea18[227];if(error==_0xea18[2]){for(var c=1;c<55;c++)r+=a[c];$(_0xea18[105])[_0xea18[24]](_0xea18[228],_0xea18[229])}

else r=_0xea18[169],$(_0xea18[105])[_0xea18[24]](_0xea18[228],_0xea18[230]);$(_0xea18[105])[_0xea18[24]](_0xea18[23],r)}function jumbleCube(){for(i=0;i<200;i++){var e=Math[_0xea18[36]]

(12*Math[_0xea18[35]]());0==e&&(bor(),uu()),1==e&&(fd(),ui()),2==e&&ff(),3==e&&fi(),4==e&&dd(),5==e&&di(),6==e&&(bor(),bb()),7==e&&(fd(),bi()),8==e&&rr(),9==e&&ri(),10==e&&ll(),11==e&&li

()}}function turnRight(){rotal(_0xea18[231],90),6==facingUp?++facingFront>5&&(facingFront=2):--facingFront<2&&(facingFront=5),$(_0xea18[15])[_0xea18[37]](),$(_0xea18[15])[_0xea18[72]]

(_0xea18[232]+facingUp+facingFront)}function turnLeft(){rotal(_0xea18[231],-90),1==facingUp?++facingFront>5&&(facingFront=2):--facingFront<2&&(facingFront=5),$(_0xea18[15])[_0xea18[37]](),

$(_0xea18[15])[_0xea18[72]](_0xea18[232]+facingUp+facingFront)}function flipCube(){1==facingUp?rotal(_0xea18[233],-180):rotal(_0xea18[233],180),2==facingFront?facingFront=4:3==facingFront?

facingFront=3:4==facingFront?facingFront=2:5==facingFront&&(facingFront=5),1==facingUp?facingUp=6:facingUp=1,$(_0xea18[15])[_0xea18[37]](),$(_0xea18[15])[_0xea18[72]](_0xea18[232]+facingUp

+facingFront)}function resetCube(){$(_0xea18[235])[_0xea18[26]](function(){$(this)[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[234])}),$(_0xea18[237])[_0xea18[26]](function(){$(this)

[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[236])}),$(_0xea18[239])[_0xea18[26]](function(){$(this)[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[238])}),$(_0xea18[241])[_0xea18[26]]

(function(){$(this)[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[240])}),$(_0xea18[243])[_0xea18[26]](function(){$(this)[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[242])}),$(_0xea18[245])

[_0xea18[26]](function(){$(this)[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[244])})}function rotCube(e,a,s){segs=_0xea18[246]+e+_0xea18[247]+a+_0xea18[248]+s+_0xea18[249],$(_0xea18[179])

[_0xea18[191]]({transform:segs})}function rotal(e,a){window[e]=window[e]+a,rotCube(cubex,cubey,cubez)}function doInputScramble(e){inputerror=0;var a=$(_0xea18[108])[_0xea18[130]]

(),s=_0xea18[28];turn=a[_0xea18[29]](_0xea18[86]),$(_0xea18[250])[_0xea18[7]](_0xea18[28]);for(var _=0;_<turn[_0xea18[14]];_++)if(type[_]=0,-1!=turn[_][_0xea18[90]](_0xea18[251])&&(type[_]

=1),-1!=turn[_][_0xea18[90]](_0xea18[252])&&(type[_]=1),turn[_]==turn[_][_0xea18[253]]()&&(type[_]=1),-1!=turn[_][_0xea18[90]](_0xea18[254])&&(type[_]=2),turn[_]=turn[_][_0xea18[255]](),-

1!=turn[_][_0xea18[90]](_0xea18[43]))turn[_]=1;else if(-1!=turn[_][_0xea18[90]](_0xea18[45]))turn[_]=3;else if(-1!=turn[_][_0xea18[90]](_0xea18[47]))turn[_]=5;else if(-1!=turn[_][_0xea18

[90]](_0xea18[49]))turn[_]=7;else if(-1!=turn[_][_0xea18[90]](_0xea18[51]))turn[_]=9;else if(-1!=turn[_][_0xea18[90]](_0xea18[53]))turn[_]=11;else if(-1!=turn[_][_0xea18[90]](_0xea18

[256]))turn[_]=13;else if(-1!=turn[_][_0xea18[90]](_0xea18[257]))turn[_]=15;else if(-1!=turn[_][_0xea18[90]](_0xea18[258]))turn[_]=17;else if(-1!=turn[_][_0xea18[90]](_0xea18[259]))turn[_]

=19;else if(-1!=turn[_][_0xea18[90]](_0xea18[260]))turn[_]=21;else{if(-1==turn[_][_0xea18[90]](_0xea18[261])){inputerror=1,$(_0xea18[250])[_0xea18[7]](_0xea18[262]+(_+1)+_0xea18[263]+turn

[_]);break}turn[_]=23}if(0==inputerror){for(_=0;_<turn[_0xea18[14]];_++)s+=_0xea18[264]+_+_0xea18[21],1==turn[_]&&(s+=_0xea18[43]),3==turn[_]&&(s+=_0xea18[45]),5==turn[_]&&(s+=_0xea18

[47]),7==turn[_]&&(s+=_0xea18[49]),9==turn[_]&&(s+=_0xea18[51]),11==turn[_]&&(s+=_0xea18[53]),13==turn[_]&&(s+=_0xea18[256]),15==turn[_]&&(s+=_0xea18[257]),17==turn[_]&&(s+=_0xea18

[258]),19==turn[_]&&(s+=_0xea18[259]),21==turn[_]&&(s+=_0xea18[260]),23==turn[_]&&(s+=_0xea18[261]),1==type[_]&&(s+=_0xea18[252]),2==type[_]&&(s+=_0xea18[254]),s+=_0xea18[65];$(_0xea18

[265])[_0xea18[7]](s),$(_0xea18[266])[_0xea18[69]](),executeInputScramble(0,e)}a[_0xea18[14]]<1&&$(_0xea18[250])[_0xea18[7]](_0xea18[267])}function executeInputScramble(e,a){updateA(),

$(_0xea18[268])[_0xea18[37]](_0xea18[70]),$(_0xea18[269]+e)[_0xea18[72]](_0xea18[70]);var s=0;turn[_0xea18[14]]>e?(s=turn[e],1==type[e]&&s++,1==s&&uu(),2==s&&ui(),3==s&&ll(),4==s&&li

(),5==s&&ff(),6==s&&fi(),7==s&&rr(),8==s&&ri(),9==s&&bb(),10==s&&bi(),11==s&&dd(),12==s&&di(),13==s&&(li(),rr(),bor()),14==s&&(ll(),ri(),bor(),bor(),bor()),15==s&&(uu(),di(),fd(),fd(),fd

()),16==s&&(ui(),dd(),fd()),17==s&&(fi(),bb(),fd(),bor(),fd(),fd(),fd()),18==s&&(ff(),bi(),bor(),fd(),fd(),fd(),bor(),fd(),fd()),19==s&&(bor(),bor(),bor()),20==s&&bor(),21==s&&fd(),22==s&&

(fd(),fd(),fd()),23==s&&(fd(),bor(),fd(),fd(),fd()),24==s&&(fd(),fd(),fd(),bor(),fd()),setTimeout(function(){updateCube()},a/2),2==type[e]?type[e]=0:e++,setTimeout(function()

{executeInputScramble(e,a)},a)):($(_0xea18[265])[_0xea18[7]](_0xea18[28]),$(_0xea18[266])[_0xea18[67]]()),updateCube()}function updateA(){for(i=1;i<55;i++)a[i]=$(_0xea18[271]+i)[_0xea18

[24]](_0xea18[165])[_0xea18[270]](5)}function updateCube(){for(i=1;i<55;i++)$(_0xea18[271]+i)[_0xea18[37]](),$(_0xea18[271]+i)[_0xea18[72]](_0xea18[161]+a[i])}function bor(){s[1]=a[1],s[2]

=a[4],s[3]=a[7],a[1]=a[45],a[4]=a[42],a[7]=a[39],a[45]=a[46],a[42]=a[49],a[39]=a[52],a[46]=a[19],a[49]=a[22],a[52]=a[25],a[19]=s[1],a[22]=s[2],a[25]=s[3],s[1]=a[2],s[2]=a[5],s[3]=a[8],a[2]

=a[44],a[5]=a[41],a[8]=a[38],a[44]=a[47],a[41]=a[50],a[38]=a[53],a[47]=a[20],a[50]=a[23],a[53]=a[26],a[20]=s[1],a[23]=s[2],a[26]=s[3],s[1]=a[3],s[2]=a[6],s[3]=a[9],a[3]=a[43],a[6]=a[40],a

[9]=a[37],a[43]=a[48],a[40]=a[51],a[37]=a[54],a[48]=a[21],a[51]=a[24],a[54]=a[27],a[21]=s[1],a[24]=s[2],a[27]=s[3],s[1]=a[10],s[2]=a[11],a[10]=a[16],a[11]=a[13],a[16]=a[18],a[13]=a[17],a

[18]=a[12],a[17]=a[15],a[12]=s[1],a[15]=s[2],s[1]=a[28],s[2]=a[29],a[28]=a[30],a[29]=a[33],a[30]=a[36],a[33]=a[35],a[36]=a[34],a[35]=a[31],a[34]=s[1],a[31]=s[2]}function rot(){s[1]=a[25],s

[2]=a[26],s[3]=a[27],a[25]=a[16],a[26]=a[17],a[27]=a[18],a[16]=a[43],a[17]=a[44],a[18]=a[45],a[43]=a[34],a[44]=a[35],a[45]=a[36],a[34]=s[1],a[35]=s[2],a[36]=s[3],s[1]=a[46],s[2]=a[47],a

[46]=a[52],a[47]=a[49],a[52]=a[54],a[49]=a[53],a[54]=a[48],a[53]=a[51],a[48]=s[1],a[51]=s[2]}function roti(){s[1]=a[25],s[2]=a[26],s[3]=a[27],a[25]=a[34],a[26]=a[35],a[27]=a[36],a[34]=a

[43],a[35]=a[44],a[36]=a[45],a[43]=a[16],a[44]=a[17],a[45]=a[18],a[16]=s[1],a[17]=s[2],a[18]=s[3],s[1]=a[46],s[2]=a[47],a[46]=a[48],a[47]=a[51],a[48]=a[54],a[51]=a[53],a[54]=a[52],a[53]=a

[49],a[52]=s[1],a[49]=s[2]}function fd(){s[1]=a[19],s[2]=a[20],s[3]=a[21],a[19]=a[28],a[20]=a[29],a[21]=a[30],a[28]=a[37],a[29]=a[38],a[30]=a[39],a[37]=a[10],a[38]=a[11],a[39]=a[12],a[10]

=s[1],a[11]=s[2],a[12]=s[3],s[1]=a[22],s[2]=a[23],s[3]=a[24],a[22]=a[31],a[23]=a[32],a[24]=a[33],a[31]=a[40],a[32]=a[41],a[33]=a[42],a[40]=a[13],a[41]=a[14],a[42]=a[15],a[13]=s[1],a[14]=s

[2],a[15]=s[3],s[1]=a[25],s[2]=a[26],s[3]=a[27],a[25]=a[34],a[26]=a[35],a[27]=a[36],a[34]=a[43],a[35]=a[44],a[36]=a[45],a[43]=a[16],a[44]=a[17],a[45]=a[18],a[16]=s[1],a[17]=s[2],a[18]=s

[3],s[1]=a[1],s[2]=a[2],a[1]=a[7],a[2]=a[4],a[7]=a[9],a[4]=a[8],a[9]=a[3],a[8]=a[6],a[3]=s[1],a[6]=s[2],s[1]=a[46],s[2]=a[47],a[46]=a[48],a[47]=a[51],a[48]=a[54],a[51]=a[53],a[54]=a[52],a

[53]=a[49],a[52]=s[1],a[49]=s[2]}function uu(){bor(),bor(),rot(),bor(),bor()}function ui(){bor(),bor(),roti(),bor(),bor()}function ff(){bor(),rot(),bor(),bor(),bor()}function fi(){bor

(),roti(),bor(),bor(),bor()}function rr(){fd(),bor(),rot(),bor(),bor(),bor(),fd(),fd(),fd()}function ri(){fd(),bor(),roti(),bor(),bor(),bor(),fd(),fd(),fd()}function ll(){fd(),fd(),fd

(),bor(),rot(),bor(),bor(),bor(),fd()}function li(){fd(),fd(),fd(),bor(),roti(),bor(),bor(),bor(),fd()}function dd(){rot()}function di(){roti()}function bb(){bor(),bor(),bor(),rot(),bor()}

function bi(){bor(),bor(),bor(),roti(),bor()}function kicsibor(){s[1]=kics[1],s[2]=kics[4],s[3]=kics[7],kics[1]=kics[45],kics[4]=kics[42],kics[7]=kics[39],kics[45]=kics[46],kics[42]=kics

[49],kics[39]=kics[52],kics[46]=kics[19],kics[49]=kics[22],kics[52]=kics[25],kics[19]=s[1],kics[22]=s[2],kics[25]=s[3],s[1]=kics[2],s[2]=kics[5],s[3]=kics[8],kics[2]=kics[44],kics[5]=kics

[41],kics[8]=kics[38],kics[44]=kics[47],kics[41]=kics[50],kics[38]=kics[53],kics[47]=kics[20],kics[50]=kics[23],kics[53]=kics[26],kics[20]=s[1],kics[23]=s[2],kics[26]=s[3],s[1]=kics[3],s

[2]=kics[6],s[3]=kics[9],kics[3]=kics[43],kics[6]=kics[40],kics[9]=kics[37],kics[43]=kics[48],kics[40]=kics[51],kics[37]=kics[54],kics[48]=kics[21],kics[51]=kics[24],kics[54]=kics[27],kics

[21]=s[1],kics[24]=s[2],kics[27]=s[3],s[1]=kics[10],s[2]=kics[11],kics[10]=kics[16],kics[11]=kics[13],kics[16]=kics[18],kics[13]=kics[17],kics[18]=kics[12],kics[17]=kics[15],kics[12]=s

[1],kics[15]=s[2],s[1]=kics[28],s[2]=kics[29],kics[28]=kics[30],kics[29]=kics[33],kics[30]=kics[36],kics[33]=kics[35],kics[36]=kics[34],kics[35]=kics[31],kics[34]=s[1],kics[31]=s[2]}

function kicsirot(){s[1]=kics[25],s[2]=kics[26],s[3]=kics[27],kics[25]=kics[16],kics[26]=kics[17],kics[27]=kics[18],kics[16]=kics[43],kics[17]=kics[44],kics[18]=kics[45],kics[43]=kics

[34],kics[44]=kics[35],kics[45]=kics[36],kics[34]=s[1],kics[35]=s[2],kics[36]=s[3],s[1]=kics[46],s[2]=kics[47],kics[46]=kics[52],kics[47]=kics[49],kics[52]=kics[54],kics[49]=kics[53],kics

[54]=kics[48],kics[53]=kics[51],kics[48]=s[1],kics[51]=s[2]}function kicsiroti(){s[1]=kics[25],s[2]=kics[26],s[3]=kics[27],kics[25]=kics[34],kics[26]=kics[35],kics[27]=kics[36],kics[34]

=kics[43],kics[35]=kics[44],kics[36]=kics[45],kics[43]=kics[16],kics[44]=kics[17],kics[45]=kics[18],kics[16]=s[1],kics[17]=s[2],kics[18]=s[3],s[1]=kics[46],s[2]=kics[47],kics[46]=kics

[48],kics[47]=kics[51],kics[48]=kics[54],kics[51]=kics[53],kics[54]=kics[52],kics[53]=kics[49],kics[52]=s[1],kics[49]=s[2]}function kicsifd(){s[1]=kics[19],s[2]=kics[20],s[3]=kics[21],kics

[19]=kics[28],kics[20]=kics[29],kics[21]=kics[30],kics[28]=kics[37],kics[29]=kics[38],kics[30]=kics[39],kics[37]=kics[10],kics[38]=kics[11],kics[39]=kics[12],kics[10]=s[1],kics[11]=s

[2],kics[12]=s[3],s[1]=kics[22],s[2]=kics[23],s[3]=kics[24],kics[22]=kics[31],kics[23]=kics[32],kics[24]=kics[33],kics[31]=kics[40],kics[32]=kics[41],kics[33]=kics[42],kics[40]=kics

[13],kics[41]=kics[14],kics[42]=kics[15],kics[13]=s[1],kics[14]=s[2],kics[15]=s[3],s[1]=kics[25],s[2]=kics[26],s[3]=kics[27],kics[25]=kics[34],kics[26]=kics[35],kics[27]=kics[36],kics[34]

=kics[43],kics[35]=kics[44],kics[36]=kics[45],kics[43]=kics[16],kics[44]=kics[17],kics[45]=kics[18],kics[16]=s[1],kics[17]=s[2],kics[18]=s[3],s[1]=kics[1],s[2]=kics[2],kics[1]=kics[7],kics

[2]=kics[4],kics[7]=kics[9],kics[4]=kics[8],kics[9]=kics[3],kics[8]=kics[6],kics[3]=s[1],kics[6]=s[2],s[1]=kics[46],s[2]=kics[47],kics[46]=kics[48],kics[47]=kics[51],kics[48]=kics[54],kics

[51]=kics[53],kics[54]=kics[52],kics[53]=kics[49],kics[52]=s[1],kics[49]=s[2]}function kicsiuu(){kicsibor(),kicsibor(),kicsirot(),kicsibor(),kicsibor()}function kicsiui(){kicsibor

(),kicsibor(),kicsiroti(),kicsibor(),kicsibor()}function kicsiff(){kicsibor(),kicsirot(),kicsibor(),kicsibor(),kicsibor()}function kicsifi(){kicsibor(),kicsiroti(),kicsibor(),kicsibor

(),kicsibor()}function kicsirr(){kicsifd(),kicsibor(),kicsirot(),kicsibor(),kicsibor(),kicsibor(),kicsifd(),kicsifd(),kicsifd()}function kicsiri(){kicsifd(),kicsibor(),kicsiroti(),kicsibor

(),kicsibor(),kicsibor(),kicsifd(),kicsifd(),kicsifd()}function kicsill(){kicsifd(),kicsifd(),kicsifd(),kicsibor(),kicsirot(),kicsibor(),kicsibor(),kicsibor(),kicsifd()}function kicsili()

{kicsifd(),kicsifd(),kicsifd(),kicsibor(),kicsiroti(),kicsibor(),kicsibor(),kicsibor(),kicsifd()}function kicsidd(){kicsirot()}function kicsidi(){kicsiroti()}function kicsibb(){kicsibor

(),kicsibor(),kicsibor(),kicsirot(),kicsibor(),stp++,step[stp]=9}function kicsibi(){kicsibor(),kicsibor(),kicsibor(),kicsiroti(),kicsibor(),stp++,step[stp]=10}function sbsbor(){s[1]=sbs

[1],s[2]=sbs[4],s[3]=sbs[7],sbs[1]=sbs[45],sbs[4]=sbs[42],sbs[7]=sbs[39],sbs[45]=sbs[46],sbs[42]=sbs[49],sbs[39]=sbs[52],sbs[46]=sbs[19],sbs[49]=sbs[22],sbs[52]=sbs[25],sbs[19]=s[1],sbs

[22]=s[2],sbs[25]=s[3],s[1]=sbs[2],s[2]=sbs[5],s[3]=sbs[8],sbs[2]=sbs[44],sbs[5]=sbs[41],sbs[8]=sbs[38],sbs[44]=sbs[47],sbs[41]=sbs[50],sbs[38]=sbs[53],sbs[47]=sbs[20],sbs[50]=sbs[23],sbs

[53]=sbs[26],sbs[20]=s[1],sbs[23]=s[2],sbs[26]=s[3],s[1]=sbs[3],s[2]=sbs[6],s[3]=sbs[9],sbs[3]=sbs[43],sbs[6]=sbs[40],sbs[9]=sbs[37],sbs[43]=sbs[48],sbs[40]=sbs[51],sbs[37]=sbs[54],sbs[48]

=sbs[21],sbs[51]=sbs[24],sbs[54]=sbs[27],sbs[21]=s[1],sbs[24]=s[2],sbs[27]=s[3],s[1]=sbs[10],s[2]=sbs[11],sbs[10]=sbs[16],sbs[11]=sbs[13],sbs[16]=sbs[18],sbs[13]=sbs[17],sbs[18]=sbs

[12],sbs[17]=sbs[15],sbs[12]=s[1],sbs[15]=s[2],s[1]=sbs[28],s[2]=sbs[29],sbs[28]=sbs[30],sbs[29]=sbs[33],sbs[30]=sbs[36],sbs[33]=sbs[35],sbs[36]=sbs[34],sbs[35]=sbs[31],sbs[34]=s[1],sbs

[31]=s[2]}function sbsrot(){s[1]=sbs[25],s[2]=sbs[26],s[3]=sbs[27],sbs[25]=sbs[16],sbs[26]=sbs[17],sbs[27]=sbs[18],sbs[16]=sbs[43],sbs[17]=sbs[44],sbs[18]=sbs[45],sbs[43]=sbs[34],sbs[44]

=sbs[35],sbs[45]=sbs[36],sbs[34]=s[1],sbs[35]=s[2],sbs[36]=s[3],s[1]=sbs[46],s[2]=sbs[47],sbs[46]=sbs[52],sbs[47]=sbs[49],sbs[52]=sbs[54],sbs[49]=sbs[53],sbs[54]=sbs[48],sbs[53]=sbs

[51],sbs[48]=s[1],sbs[51]=s[2]}function sbsroti(){s[1]=sbs[25],s[2]=sbs[26],s[3]=sbs[27],sbs[25]=sbs[34],sbs[26]=sbs[35],sbs[27]=sbs[36],sbs[34]=sbs[43],sbs[35]=sbs[44],sbs[36]=sbs[45],sbs

[43]=sbs[16],sbs[44]=sbs[17],sbs[45]=sbs[18],sbs[16]=s[1],sbs[17]=s[2],sbs[18]=s[3],s[1]=sbs[46],s[2]=sbs[47],sbs[46]=sbs[48],sbs[47]=sbs[51],sbs[48]=sbs[54],sbs[51]=sbs[53],sbs[54]=sbs

[52],sbs[53]=sbs[49],sbs[52]=s[1],sbs[49]=s[2]}function sbsfd(){s[1]=sbs[19],s[2]=sbs[20],s[3]=sbs[21],sbs[19]=sbs[28],sbs[20]=sbs[29],sbs[21]=sbs[30],sbs[28]=sbs[37],sbs[29]=sbs[38],sbs

[30]=sbs[39],sbs[37]=sbs[10],sbs[38]=sbs[11],sbs[39]=sbs[12],sbs[10]=s[1],sbs[11]=s[2],sbs[12]=s[3],s[1]=sbs[22],s[2]=sbs[23],s[3]=sbs[24],sbs[22]=sbs[31],sbs[23]=sbs[32],sbs[24]=sbs

[33],sbs[31]=sbs[40],sbs[32]=sbs[41],sbs[33]=sbs[42],sbs[40]=sbs[13],sbs[41]=sbs[14],sbs[42]=sbs[15],sbs[13]=s[1],sbs[14]=s[2],sbs[15]=s[3],s[1]=sbs[25],s[2]=sbs[26],s[3]=sbs[27],sbs[25]

=sbs[34],sbs[26]=sbs[35],sbs[27]=sbs[36],sbs[34]=sbs[43],sbs[35]=sbs[44],sbs[36]=sbs[45],sbs[43]=sbs[16],sbs[44]=sbs[17],sbs[45]=sbs[18],sbs[16]=s[1],sbs[17]=s[2],sbs[18]=s[3],s[1]=sbs

[1],s[2]=sbs[2],sbs[1]=sbs[7],sbs[2]=sbs[4],sbs[7]=sbs[9],sbs[4]=sbs[8],sbs[9]=sbs[3],sbs[8]=sbs[6],sbs[3]=s[1],sbs[6]=s[2],s[1]=sbs[46],s[2]=sbs[47],sbs[46]=sbs[48],sbs[47]=sbs[51],sbs

[48]=sbs[54],sbs[51]=sbs[53],sbs[54]=sbs[52],sbs[53]=sbs[49],sbs[52]=s[1],sbs[49]=s[2]}function sbsuu(){sbsbor(),sbsbor(),sbsrot(),sbsbor(),sbsbor()}function sbsui(){sbsbor(),sbsbor

(),sbsroti(),sbsbor(),sbsbor()}function sbsff(){sbsbor(),sbsrot(),sbsbor(),sbsbor(),sbsbor()}function sbsfi(){sbsbor(),sbsroti(),sbsbor(),sbsbor(),sbsbor()}function sbsrr(){sbsfd(),sbsbor

(),sbsrot(),sbsbor(),sbsbor(),sbsbor(),sbsfd(),sbsfd(),sbsfd()}function sbsri(){sbsfd(),sbsbor(),sbsroti(),sbsbor(),sbsbor(),sbsbor(),sbsfd(),sbsfd(),sbsfd()}function sbsll(){sbsfd(),sbsfd

(),sbsfd(),sbsbor(),sbsrot(),sbsbor(),sbsbor(),sbsbor(),sbsfd()}function sbsli(){sbsfd(),sbsfd(),sbsfd(),sbsbor(),sbsroti(),sbsbor(),sbsbor(),sbsbor(),sbsfd()}function sbsdd(){sbsrot()}

function sbsdi(){sbsroti()}function sbsbb(){sbsbor(),sbsbor(),sbsbor(),sbsrot(),sbsbor(),stp++,step[stp]=9}function sbsbi(){sbsbor(),sbsbor(),sbsbor(),sbsroti(),sbsbor(),stp++,step[stp]

=10}function getQueryString(e){for(var a={},s=e[_0xea18[29]](_0xea18[392]),_=0;_<s[_0xea18[14]];_++){var x=s[_][_0xea18[29]](_0xea18[393]),i=x[_0xea18[394]](),t=x[_0xea18[349]](_0xea18

[393]);t=!t||(t[_0xea18[253]]()==_0xea18[395]||t[_0xea18[253]]()!=_0xea18[396]&&unescape(t)[_0xea18[138]](/\+/g,_0xea18[86])),a[i]=t}return a}function typedToArray(e){for(var a=[],s=0;s<e

[_0xea18[14]];s++)a[_0xea18[276]](s);return a}function buildOutput(e){var a=document[_0xea18[63]](_0xea18[382]);a[_0xea18[427]]=e,a[_0xea18[61]]=_0xea18[28];for(_=0;_<e[_0xea18[14]];_++)

{var s=document[_0xea18[416]](_0xea18[428]);s[_0xea18[61]]=e[_][_0xea18[369]],s[_0xea18[275]]=e[_],s[_0xea18[429]]=0==_?_0xea18[430]:_0xea18[275],a[_0xea18[418]](s),e[_][_0xea18[431]]=s}

stp=e[_0xea18[14]];for(var _=0;_<e[_0xea18[14]];_++)e[_][_0xea18[369]]==_0xea18[43]&&(step[_+1]=1),e[_][_0xea18[369]]==_0xea18[44]&&(step[_+1]=2),e[_][_0xea18[369]]==_0xea18[45]&&(step[_

+1]=3),e[_][_0xea18[369]]==_0xea18[46]&&(step[_+1]=4),e[_][_0xea18[369]]==_0xea18[47]&&(step[_+1]=5),e[_][_0xea18[369]]==_0xea18[48]&&(step[_+1]=6),e[_][_0xea18[369]]==_0xea18[49]&&(step[_

+1]=7),e[_][_0xea18[369]]==_0xea18[50]&&(step[_+1]=8),e[_][_0xea18[369]]==_0xea18[51]&&(step[_+1]=9),e[_][_0xea18[369]]==_0xea18[52]&&(step[_+1]=10),e[_][_0xea18[369]]==_0xea18[53]&&(step

[_+1]=11),e[_][_0xea18[369]]==_0xea18[54]&&(step[_+1]=12),e[_][_0xea18[369]]==_0xea18[55]&&(step[_+1]=13),e[_][_0xea18[369]]==_0xea18[56]&&(step[_+1]=14),e[_][_0xea18[369]]==_0xea18[57]&&

(step[_+1]=15),e[_][_0xea18[369]]==_0xea18[58]&&(step[_+1]=16),e[_][_0xea18[369]]==_0xea18[59]&&(step[_+1]=17),e[_][_0xea18[369]]==_0xea18[60]&&(step[_+1]=18);kiirarrayt(),eddigkiir(0),

$(_0xea18[137])[_0xea18[69]](),$(_0xea18[144])[_0xea18[143]]({scrollTop:$($(_0xea18[432]))[_0xea18[142]]()[_0xea18[141]]-20},500)}function makeQueryString(e,a,s){var _=s?_0xea18

[433]:_0xea18[28],x=!1;for(var i in e)e[_0xea18[434]](i)&&(a&&0==e[i]||(x=!0,_+=encodeURIComponent(i)+_0xea18[393]+encodeURIComponent(e[i])+_0xea18[392]));return x?_[_0xea18[278]](0,_

[_0xea18[14]]-1):_0xea18[28]}function popState(e){var a=e[_0xea18[435]];if(a){var s=document[_0xea18[63]](_0xea18[17]);if(a[_0xea18[17]]&&(a[_0xea18[17]]==_0xea18[436]?cleanCube(!0):a

[_0xea18[17]]==_0xea18[437]?clearFacelets(!0):a[_0xea18[17]]==_0xea18[35]?worker[_0xea18[31]]({type:_0xea18[35]}):54==a[_0xea18[17]][_0xea18[14]]&&(s[_0xea18[410]]=a[_0xea18[17]],setInput

[_0xea18[414]](s))),a[_0xea18[382]]){var _=a[_0xea18[382]][_0xea18[138]](/_/g,_0xea18[86]);Cube[_0xea18[438]](_)&&buildOutput(Cube[_0xea18[368]](_))}}}function pushState(){}function 

setCubeText(){isRandom=!1;for(var e=_0xea18[28],a=document[_0xea18[63]](_0xea18[17]),s=0;s<facelets[_0xea18[14]];s++){if(document[_0xea18[63]](facelets[s])[_0xea18[161]]==_0xea18[28])return 

void(a[_0xea18[410]]=_0xea18[28]);e+=document[_0xea18[63]](facelets[s])[_0xea18[161]]}1==document[_0xea18[63]](_0xea18[441])[_0xea18[440]]?(e=Cube[_0xea18[442]](e),a[_0xea18[410]]

=e,setInput()):a[_0xea18[410]]=e,pushState()}function setInput(){isRandom=!1;var e=document[_0xea18[63]](_0xea18[17]);if(54==e[_0xea18[410]][_0xea18[14]])for(var a=e[_0xea18[410]][_0xea18

[29]](_0xea18[28]),s=0;s<54;s++){var _=facelets[s],x=document[_0xea18[63]](_);x[_0xea18[161]]=a[s],x[_0xea18[444]][_0xea18[443]]=colorNames[a[s]]}}function clearFacelets(e){isRandom=!

1,document[_0xea18[63]](_0xea18[17])[_0xea18[410]]=_0xea18[445];for(var a=0;a<facelets[_0xea18[14]];a++){var s=document[_0xea18[63]](facelets[a]);s[_0xea18[448]][_0xea18[447]](_0xea18

[446])||(s[_0xea18[161]]=_0xea18[360],s[_0xea18[444]][_0xea18[443]]=colorNames[_0xea18[360]])}!0!==e&&pushState()}function cleanCube(e){isRandom=!1;for(var a=0;a<facelets[_0xea18[14]];a++)

{var s=document[_0xea18[63]](facelets[a]);s[_0xea18[448]][_0xea18[447]](_0xea18[446])||(s[_0xea18[161]]=facelets[a][_0xea18[278]](0,1),s[_0xea18[444]][_0xea18[443]]=colorNames[s[_0xea18

[161]]])}document[_0xea18[63]](_0xea18[17])[_0xea18[410]]=_0xea18[449],!0!==e&&pushState()}function setColor(){this[_0xea18[448]][_0xea18[447]](_0xea18[446])?(currentColor=this[_0xea18

[161]],document[_0xea18[63]](_0xea18[450])[_0xea18[161]]=currentColor,document[_0xea18[63]](_0xea18[450])[_0xea18[444]][_0xea18[443]]=colorNames[currentColor]):(this[_0xea18[161]]

=currentColor,this[_0xea18[444]][_0xea18[443]]=colorNames[currentColor],setCubeText())}function calculateChanges(e){var a,s,_,x,i={from:[],to:[]},t=e[_0xea18[279]];e[_0xea18[277]]==_0xea18

[43]?(a=_0xea18[451],s=_0xea18[452],_=_0xea18[453],x=2):e[_0xea18[277]]==_0xea18[49]?(a=_0xea18[452],s=_0xea18[453],_=_0xea18[451],x=2,t*=-1):e[_0xea18[277]]==_0xea18[47]?(a=_0xea18

[453],s=_0xea18[452],_=_0xea18[451],x=0):e[_0xea18[277]]==_0xea18[53]?(a=_0xea18[451],s=_0xea18[453],_=_0xea18[452],x=0,t*=-1):e[_0xea18[277]]==_0xea18[45]?(a=_0xea18[452],s=_0xea18

[451],_=_0xea18[453],x=0):e[_0xea18[277]]==_0xea18[51]&&(a=_0xea18[453],s=_0xea18[451],_=_0xea18[452],x=2,t*=-1);for(var o={x:[2,5,3,4],y:[1,5,0,4],z:[0,2,1,3]}[a],r=2-t,c=i[_0xea18[454]]=

[0,1,2,3,4,5],n=0;n<r;n++)for(var b=c[_0xea18[353]](),u=0;u<4;u++)c[o[u]]=b[o[(u+1)%4]];for(n=0;n<9;n++){var k={},f={};k[a]=x,k[s]=n%3,k[_]=n/3|0,i[_0xea18[455]][_0xea18[276]](k),f[a]

=x,0==e[_0xea18[279]]?(f[s]=2-n%3,f[_]=2-(n/3|0)):1==e[_0xea18[279]]?(f[s]=n/3|0,f[_]=2-n%3):-1==e[_0xea18[279]]&&(f[s]=2-(n/3|0),f[_]=n%3),i[_0xea18[456]][_0xea18[276]](f)}return i}

function setColorNames(){localStorage[_0xea18[457]]=JSON[_0xea18[458]](colorNames)}function getColorNames(){colorNames=localStorage[_0xea18[457]]?JSON[_0xea18[459]](localStorage[_0xea18

[457]]):{U:_0xea18[460],R:_0xea18[461],F:_0xea18[462],L:_0xea18[463],D:_0xea18[401],B:_0xea18[464],_:_0xea18[465]};for(var e in colorNames){var a=document[_0xea18[63]](e+_0xea18[466]);if

(a){a[_0xea18[410]]=colorNames[e];var s=document[_0xea18[468]](_0xea18[467]);s[_0xea18[470]](_0xea18[469],!0,!0),a[_0xea18[471]](s)}}}function resetColorNames(){localStorage[_0xea18[457]]

=_0xea18[28],getColorNames(),setInput[_0xea18[414]](document[_0xea18[63]](_0xea18[17]))}function setColors(e){colorNames[this[_0xea18[473]](_0xea18[472])]=this[_0xea18[410]],setInput

[_0xea18[414]](document[_0xea18[63]](_0xea18[17])),setColorNames()}function setColorBlank(){currentColor=_0xea18[360],document[_0xea18[63]](_0xea18[450])[_0xea18[161]]

=currentColor,document[_0xea18[63]](_0xea18[450])[_0xea18[444]][_0xea18[443]]=colorNames[currentColor]}var _0xea18=["Peace out 

yall","log","ok","keydown","addEventListener","keyCode","<table><tbody>","html","#langMessage","<tr><td>"," 

&nbsp;&nbsp;&nbsp;</td><td>","</td></tr>","</tbody></table>","#hiddenLanguageBits","length","#scrambler","setInterval","cube","0111111111222222222333333333444444444555555555666666666","<br 

/>",'<a href="/','">',"</a>","href","attr","solution.php?cube=","each",".selectlanguage 

a","","split","generateTables","postMessage","%","width","#loadingBar","random","floor","removeClass","#currentRot","playBack","#playButton","round","orient","U","U'","L","L'","F","F'","R",

"R'","B","B'","D","D'","U2","L2","F2","R2","B2","D2","innerHTML","rotacioSzoveg","getElementById",".<span>","</span>","&nbsp;","show","#vigyazzKetszer","hide","active","#algoritmusHanyadik"

,"addClass","thisRotIs","offsetHeight","wrapSidebarItems","fadeOut","#sidebarStuff","bw","body",'<div class="greenWarning"><h4>','</h4><div id="wrapHowTo"><div id="howTo"><div 

id="frame1"><p id="paragraph1">',' AdBlock</p><a class="redOctagon" id="handab" href="https://disableadblock.com/" target="_blank" rel="nofollow"><div class="octagonOuter"><div 

class="octagonInner"></div><div class="stopHand"><div class="pinkyF"></div><div class="ringF"></div><div class="middleF"></div><div class="indexF"></div><div class="thumbF"></div><div 

class="palmF"></div></div></div></a><div class="abDropdown"><span>AdBlock</span><ul><li class="highlightedLi">Don\'t run on this domain</li></ul></div><div class="mouseCursor"><div 

class="mouse1"></div><div class="mouse2"></div><div class="mouse3"></div><div class="mouse4"></div></div><p id="paragraph2"><a href="https://disableadblock.com/" target="_blank" 

rel="nofollow">Disable AdBlock.com</a></p></div></div></div><p>',"</p></div>","segedvaltozo","<div class='hanysztep'>"," ",":</div> <span id='algoritmusHanyadik0' 

onclick='playingBackTheSolution = 0;eddigkiir(0);'> &raquo; </span>","A","e-so","indexOf","domain","U&#39;","L&#39;","F&#39;","R&#39;","B&#39;","D&#39;"," <span id='algoritmusHanyadik","' 

onclick='playingBackTheSolution = 0;eddigkiir(",");'>","<span></span>","#clearCube","#resetCube","#scrambleCube","#solveCube","placeholder"," (F R2 

U')","#scrambleAlg","#callToLikeShare","<span>&swarr;</span>","#floatingTutorialAlert","a#floatingTutorialAlert, a#tutorialLink","title","#mess28","#mess29","/","a#mess11",'<div 

class="sbsStep"><div class="sbsLabel"><span class="sbsLabelID',": </span>",'</div><div class="sbsKocka">','<div class="topFace field'," color","</div>",'<div class="frontFace field','<div 

class="rightFace field',"2x",'<div class="sbsRotArr 

sbsRot',"</div></div>","stepByStep","val","#cube","hiba","<h2>","</h2>","fadeIn","#hibaUzenet","#pleasewait","replace","location","preventDefault","top","offset","animate","html, 

body","click","a.scrollLink","focusin","focusout","fadeToggle",".selectlanguage","#languageToggle","#hiba","#speedSlider","#currentSpeedDisplay","stop"," s/rot"," 

rot/s","change","#wrapPaletta","data-color","color","#wrapCube > div > div > div","#wrapPaletta a","data-field","class","substr","on","#scrambler #wrapCube > div > div","#","data-

arrow","visible","mouseover","#cubeRotations a","mouseleave","color0","#wrapCube > div > 

div","transparent","toggleClass","#wrapCube","#transparency","cubeOrient13","#floatingBacks","floatingBacks","#switchView 

a","threeDView","#wrapCubeSettings","#tothreeDView","flatView","#toflatView","rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0) translateY(0) translateZ

(0)","css","kociembaView","#tokociembaView","#turnLeft","#turnRight","#turnUp","#rotateF","#rotateR","#rotateU","#rotateB","#rotateL","#rotateD","#rotateFi","#rotateRi","#rotateUi","#rotate

Bi","#rotateLi","#rotateDi","#closeHibauzenet","#prevButton","#pauseButton","#stopButton","#nextButton","#submitScrambleAlg","#executeScrambleAlg","which","keyup","ready",":<br /> ","(",") 

&nbsp; ",".<br />"," - ","<br /> "," (",").","solution.php?cube=0","target","_blank","_self","cubey","cubeOrient","cubez","color1","#wrapCube > div#face1 > div","color2","#wrapCube > 

div#face2 > div","color3","#wrapCube > div#face3 > div","color4","#wrapCube > div#face4 > div","color5","#wrapCube > div#face5 > div","color6","#wrapCube > div#face6 > div","rotateX(","deg) 

rotateY(","deg) rotateZ(","deg) translateX(0) translateY(0) translateZ(0)","#inputScrambleError","’","'","toLowerCase","2","toUpperCase","M","E","S","X","Y","Z","Error in position ",": 

",'<span id="compiledAlg',"#compiledScramble","#scrambleAlg, #submitScrambleAlg, #executeScrambleAlg","Add a scramble algorithm","#compiledScramble 

span","#compiledAlg","charAt","#sticker","object","Cube","/RubikWorker.js","move","push","face","substring","direction","U1","U3","U4","U5","U6","U7","U8","U9","R1","R3","R4","R5","R6","R7"

,"R8","R9","F1","F3","F4","F5","F6","F7","F8","F9","D1","D3","D4","D5","D6","D7","D8","D9","L1","L3","L4","L5","L6","L7","L8","L9","B1","B3","B4","B5","B6","B7","B8","B9","URF","UFL","ULB",

"URB","RFD","FDL","DLB","RDB","UR","UF","UL","UB","RD","FD","DL","DB","RF","FL","LB","RB","faceletToCubelet","join","colorIndexes","sort","call","slice","prototype","cubeToArr","autocomplet

eArray","arrToCube","autocompleteEdge","autocompleteCorner","_","getAdjacentFacelets","orderColors","colors","edges","corners","reverse","arrayToMoveset","movesetToArray","text","match","re

verseArray","type","data","result","message","removeEventListener","worker","verify","abs","tablesGenerated","First the tables need to be 

generated!","solution","Error","solve","progress","line","time","CoordCube","defineProperty","toString","FFFF00FFFFFFFF0000FF80400000FF00FF00","&","=","shift","true","false","#FFFF0F","#1D1

6DB","#F7A000","#299E05","#FFFFFF","#EB0000","#BBBBBB","msg","outerHTML","bar","Done in ","ms","disabled","value","cc","Slice",". <br />","apply","li","createElement"," Completed, Took 

","appendChild","details","No solution in "," moves","No solution within "," seconds","This is unusual...","Sorry but I couldn't find the optimal solution in 2 minutes.<br />Please make a 

few random moves on your cube and retry to solve it or use another computer.","error","moveset","span","className","current 

move","el","#puzzleNav","?","hasOwnProperty","state","clean","clear","validateMoveset","popstate","checked","autocomplete","autocompleteCube","backgroundColor","style","____U________R______

__F________D________L________B____","center","contains","classList","UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB","currentColor","y","x","z","faceMoves","from","to","colorNames",

"stringify","parse","#FFFF00","#008000","#FF0000","#0000FF","#FFA500","#808080","Color","HTMLEvents","createEvent","input","initEvent","dispatchEvent","data-

side","getAttribute","DOMContentLoaded","hidden","generate","generateButton","randomButton","valueAsNumber","maxmoves","maxtime","colorInput","getElementsByClassName","entry","div","side","

id","5","facelet center","9","facelet right","facelet","search","mousemove","clientX","clientY","#alertBox","#alertShadow","alertBoxContent",'<iframe src="/likebox.html" width="300" 

height="300" scrolling="no">Iframes not supported</iframe>',"callToAddThis2","callToAddThis","#alertBoxClose,#alertShadow"];console[_0xea18[1]](_0xea18[0]);var activeView=1,urlkocka,a=new 

Array,s=new Array,orig=new Array,center=new Array,kics=new Array,step=new Array,sbs=new Array,mess=new 

Array,activeColor=0,listenToKeyboardRotations=1;cubeplaybackspeed=3e3,playingBackTheSolution=0,osszlepesszam=0,i=0,loadingPercent=1,aktstep=0,elozorot=0,megprobalKirakniEnnyiLepesben=20,fac

ingFront=3,facingUp=1,error=_0xea18[2],cubex=-22,cubey=-38,cubez=0,lastClickedFiled=0,scrambler=0,document[_0xea18[4]](_0xea18[3],keyDownTextField,!1),$(document)[_0xea18[218]](function()

{$(_0xea18[146])[_0xea18[145]](function(e){e[_0xea18[140]](),$(_0xea18[144])[_0xea18[143]]({scrollTop:$($(this)[_0xea18[24]](_0xea18[23]))[_0xea18[142]]()[_0xea18[141]]-20},500)}),

$(_0xea18[108])[_0xea18[147]](function(){listenToKeyboardRotations=0}),$(_0xea18[108])[_0xea18[148]](function(){listenToKeyboardRotations=1}),initVariables(),$(_0xea18[151])[_0xea18[145]]

(function(){$(_0xea18[150])[_0xea18[149]](220)}),$(_0xea18[105])[_0xea18[145]](function(){error!=_0xea18[2]&&($(_0xea18[152])[_0xea18[7]](error),$(_0xea18[136])[_0xea18[135]](300))}),

$(_0xea18[153])[_0xea18[158]](function(){cubeplaybackspeed=$(_0xea18[153])[_0xea18[130]](),$(_0xea18[154])[_0xea18[67]](),setTimeout(function(){$(_0xea18[154])[_0xea18[155]]()[_0xea18[76]]

(300)},1e3),cubeplaybackspeed>=1e3?$(_0xea18[154])[_0xea18[7]](Math[_0xea18[41]](cubeplaybackspeed/1e3*10)/10+_0xea18[156]):$(_0xea18[154])[_0xea18[7]](Math[_0xea18[41]]

(1e3/cubeplaybackspeed*10)/10+_0xea18[157])}),$(_0xea18[163])[_0xea18[145]](function(){$(_0xea18[159])[_0xea18[37]](),activeColor=$(this)[_0xea18[24]](_0xea18[160]),$(_0xea18[159])[_0xea18

[72]](_0xea18[161]+activeColor),$(_0xea18[162])[_0xea18[37]](),$(_0xea18[162])[_0xea18[72]](_0xea18[161]+activeColor)}),$(_0xea18[168])[_0xea18[167]](_0xea18[145],function(){var e=$(this)

[_0xea18[24]](_0xea18[164]);if(lastClickedFiled==e&&(activeColor=0,$(_0xea18[159])[_0xea18[37]](),$(_0xea18[159])[_0xea18[72]](_0xea18[161]+activeColor)),activeColor>0)$(this)[_0xea18[37]]

(),$(this)[_0xea18[72]](_0xea18[161]+activeColor);else{$(_0xea18[162])[_0xea18[37]]();var a=$(this)[_0xea18[24]](_0xea18[165]),s=a[_0xea18[166]](a[_0xea18[14]]-1);(s=Number(s)+1)>6&&(s=1),

$(this)[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[161]+s)}lastClickedFiled=e}),$(_0xea18[173])[_0xea18[172]](function(e){var a=_0xea18[169]+$(this)[_0xea18[24]](_0xea18[170]);$(a)

[_0xea18[72]](_0xea18[171])}),$(_0xea18[173])[_0xea18[174]](function(e){var a=_0xea18[169]+$(this)[_0xea18[24]](_0xea18[170]);$(a)[_0xea18[37]](_0xea18[171])}),$(_0xea18[102])[_0xea18

[145]](function(){$(_0xea18[176])[_0xea18[26]](function(){$(this)[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[175])})}),$(_0xea18[103])[_0xea18[145]](function(){resetCube()}),$(_0xea18

[180])[_0xea18[145]](function(){$(_0xea18[179])[_0xea18[178]](_0xea18[177]),$(_0xea18[180])[_0xea18[178]](_0xea18[70])}),$(_0xea18[182])[_0xea18[145]](function(){$(_0xea18[15])[_0xea18

[37]](),$(_0xea18[15])[_0xea18[72]](_0xea18[181]),facingFront=3,facingUp=1,$(_0xea18[182])[_0xea18[178]](_0xea18[70]),cubex=-22,cubey=-38,cubez=0,rotCube(cubex,cubey,cubez),setTimeout

(function(){$(_0xea18[179])[_0xea18[178]](_0xea18[183])},200)}),$(_0xea18[187])[_0xea18[145]](function(){activeView=1,$(_0xea18[15])[_0xea18[72]](_0xea18

[181]),facingFront=3,facingUp=1,rotCube(cubex,cubey,cubez),$(_0xea18[184])[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[70]),$(_0xea18[179])[_0xea18[37]](),$(_0xea18[180])[_0xea18[37]](),

$(_0xea18[182])[_0xea18[37]](),setTimeout(function(){$(_0xea18[179])[_0xea18[72]](_0xea18[185])},400),setTimeout(function(){$(_0xea18[186])[_0xea18[135]](300)},1e3)}),$(_0xea18[189])

[_0xea18[145]](function(){activeView=2,cubex=-22,cubey=-38,cubez=0,rotCube(0,0,0),$(_0xea18[184])[_0xea18[37]](),$(this)[_0xea18[72]](_0xea18[70]),$(_0xea18[179])[_0xea18[37]](),$(_0xea18

[180])[_0xea18[37]](),$(_0xea18[182])[_0xea18[37]](),setTimeout(function(){$(_0xea18[179])[_0xea18[72]](_0xea18[188])},400),$(_0xea18[15])[_0xea18[37]](),$(_0xea18[186])[_0xea18[69]](0)}),

$(_0xea18[193])[_0xea18[145]](function(){cubex=-22,cubey=-38,cubez=0,rotCube(0,0,0),$(_0xea18[179])[_0xea18[191]]({transform:_0xea18[190]}),$(_0xea18[184])[_0xea18[37]](),$(this)[_0xea18

[72]](_0xea18[70]),$(_0xea18[179])[_0xea18[37]](),$(_0xea18[180])[_0xea18[37]](),$(_0xea18[182])[_0xea18[37]](),1==activeView?setTimeout(function(){$(_0xea18[179])[_0xea18[72]](_0xea18

[192])},400):$(_0xea18[179])[_0xea18[72]](_0xea18[192]),activeView=3,$(_0xea18[15])[_0xea18[37]](),$(_0xea18[186])[_0xea18[76]](300)}),$(_0xea18[194])[_0xea18[145]](function(){turnLeft

()}),$(_0xea18[195])[_0xea18[145]](function(){turnRight()}),$(_0xea18[196])[_0xea18[145]](function(){flipCube()}),$(_0xea18[197])[_0xea18[145]](function(){updateA(),ff(),updateCube()}),

$(_0xea18[198])[_0xea18[145]](function(){updateA(),rr(),updateCube()}),$(_0xea18[199])[_0xea18[145]](function(){updateA(),uu(),updateCube()}),$(_0xea18[200])[_0xea18[145]](function()

{updateA(),bb(),updateCube()}),$(_0xea18[201])[_0xea18[145]](function(){updateA(),ll(),updateCube()}),$(_0xea18[202])[_0xea18[145]](function(){updateA(),dd(),updateCube()}),$(_0xea18[203])

[_0xea18[145]](function(){updateA(),fi(),updateCube()}),$(_0xea18[204])[_0xea18[145]](function(){updateA(),ri(),updateCube()}),$(_0xea18[205])[_0xea18[145]](function(){updateA(),ui

(),updateCube()}),$(_0xea18[206])[_0xea18[145]](function(){updateA(),bi(),updateCube()}),$(_0xea18[207])[_0xea18[145]](function(){updateA(),li(),updateCube()}),$(_0xea18[208])[_0xea18

[145]](function(){updateA(),di(),updateCube()}),$(_0xea18[104])[_0xea18[145]](function(){resetCube(),updateA(),jumbleCube(),setTimeout(function(){jumbleCube(),updateCube()},300),setTimeout

(function(){jumbleCube(),updateCube()},600),setTimeout(function(){jumbleCube(),updateCube()},900),updateCube()}),$(_0xea18[209])[_0xea18[145]](function(e){$(_0xea18[136])[_0xea18[76]]

(200)}),$(_0xea18[210])[_0xea18[145]](function(e){playingBackTheSolution=0,$(_0xea18[40])[_0xea18[37]](_0xea18[39]),aktstep>0&&eddigkiir(aktstep-1)}),$(_0xea18[211])[_0xea18[145]](function

(e){playingBackTheSolution=0,$(_0xea18[40])[_0xea18[37]](_0xea18[39])}),$(_0xea18[40])[_0xea18[145]](function(e){playingBackTheSolution=1,$(_0xea18[40])[_0xea18[72]](_0xea18

[39]),rekurzivSolutionPlayback()}),$(_0xea18[212])[_0xea18[145]](function(e){playingBackTheSolution=0,$(_0xea18[40])[_0xea18[37]](_0xea18[39]),aktstep=0,eddigkiir(0)}),$(_0xea18[213])

[_0xea18[145]](function(e){playingBackTheSolution=0,$(_0xea18[40])[_0xea18[37]](_0xea18[39]),aktstep<osszlepesszam&&eddigkiir(aktstep+1)}),$(_0xea18[214])[_0xea18[145]](function(e)

{doInputScramble(800)}),$(_0xea18[215])[_0xea18[145]](function(e){doInputScramble(0)}),$(_0xea18[108])[_0xea18[217]](function(e){13===e[_0xea18[216]]&&doInputScramble(800)})});var turn=new 

Array,type=new Array,inputerror=0;typeof Cube==_0xea18[272]||function(){window[_0xea18[273]]={worker:new Worker(_0xea18[274]),tablesGenerated:!1,movesetToArray:function(e){for(var a=e

[_0xea18[29]](_0xea18[86]),s=[],_=0;_<a[_0xea18[14]];_++)s[_0xea18[276]](new Cube[_0xea18[275]](a[_]));return s},move:function(e){this[_0xea18[277]]=e[_0xea18[278]](0,1)||_0xea18[43];var 

a=e[_0xea18[278]](1,2);a==_0xea18[28]?(this[_0xea18[275]]=1,this[_0xea18[279]]=1):a==_0xea18[252]?(this[_0xea18[275]]=1,this[_0xea18[279]]=-1):a==_0xea18[254]?(this[_0xea18[275]]=2,this

[_0xea18[279]]=0):(this[_0xea18[275]]=1,this[_0xea18[279]]=1)},colors:[_0xea18[43],_0xea18[49],_0xea18[47],_0xea18[53],_0xea18[45],_0xea18[51]],facelets:[_0xea18[280],_0xea18[55],_0xea18

[281],_0xea18[282],_0xea18[283],_0xea18[284],_0xea18[285],_0xea18[286],_0xea18[287],_0xea18[288],_0xea18[58],_0xea18[289],_0xea18[290],_0xea18[291],_0xea18[292],_0xea18[293],_0xea18

[294],_0xea18[295],_0xea18[296],_0xea18[57],_0xea18[297],_0xea18[298],_0xea18[299],_0xea18[300],_0xea18[301],_0xea18[302],_0xea18[303],_0xea18[304],_0xea18[60],_0xea18[305],_0xea18

[306],_0xea18[307],_0xea18[308],_0xea18[309],_0xea18[310],_0xea18[311],_0xea18[312],_0xea18[56],_0xea18[313],_0xea18[314],_0xea18[315],_0xea18[316],_0xea18[317],_0xea18[318],_0xea18

[319],_0xea18[320],_0xea18[59],_0xea18[321],_0xea18[322],_0xea18[323],_0xea18[324],_0xea18[325],_0xea18[326],_0xea18[327]],corners:[_0xea18[328],_0xea18[329],_0xea18[330],_0xea18

[331],_0xea18[332],_0xea18[333],_0xea18[334],_0xea18[335]],edges:[_0xea18[336],_0xea18[337],_0xea18[338],_0xea18[339],_0xea18[340],_0xea18[341],_0xea18[342],_0xea18[343],_0xea18

[344],_0xea18[345],_0xea18[346],_0xea18[347]],colorIndexes:{U:0,R:1,F:2,D:3,L:4,B:5},cubeToArr:function(e){for(var a=[],s=0;s<6;s++){a[s]=[];for(var _=0;_<3;_++){a[s][_]=[];for(var 

x=0;x<3;x++)a[s][_][x]=e[_0xea18[270]](9*s+3*_+x)}}return a},arrToCube:function(e){for(var a=_0xea18[28],s=0;s<6;s++)for(var _=0;_<3;_++)for(var x=0;x<3;x++)a+=e[s][_][x];return 

a},getAdjacentFacelets:function(e,a,s){for(var _=Cube[_0xea18[348]][e][a][s],x=[],i=0;i<6;i++)for(var t=0;t<3;t++)for(var o=0;o<3;o++)i==e&&t==a&&o==s||Cube[_0xea18[348]][i][t][o]!=_||x

[_0xea18[276]]([i,t,o]);return x},faceletToCubelet:[[[0,1,2],[3,4,5],[6,7,8]],[[8,5,2],[17,14,11],[26,23,20]],[[6,7,8],[15,16,17],[24,25,26]],[[24,25,26],[21,22,23],[18,19,20]],[[0,3,6],

[9,12,15],[18,21,24]],[[2,1,0],[11,10,9],[20,19,18]]],orderColors:function(){return Array[_0xea18[354]][_0xea18[353]][_0xea18[352]](arguments)[_0xea18[351]](function(e,a){return Cube

[_0xea18[350]][e]<Cube[_0xea18[350]][a]?-1:Cube[_0xea18[350]][e]>Cube[_0xea18[350]][a]?1:0})[_0xea18[349]](_0xea18[28])},autocompleteCube:function(e){return Cube[_0xea18[357]](Cube[_0xea18

[356]](Cube[_0xea18[355]](e)))},autocompleteArray:function(e){var a,s=e[_0xea18[353]]();do{a=s[_0xea18[353]](),s=Cube[_0xea18[358]](s)}while(Cube[_0xea18[357]](s)!=Cube[_0xea18[357]]

(a));do{a=s[_0xea18[353]](),s=Cube[_0xea18[359]](s)}while(Cube[_0xea18[357]](s)!=Cube[_0xea18[357]](a));return s},autocompleteEdge:function(e){for(var a=e[_0xea18[353]](),s=[],_=0;_<6;_++)

for(x=0;x<3;x++)for(i=1-x%2;i<3;i+=2)if((t=a[_][x][i])!=_0xea18[360]&&(r=a[(o=Cube[_0xea18[361]](_,x,i)[0])[0]][o[1]][o[2]])!=_0xea18[360]){c=Cube[_0xea18[362]](t,r);-1==s[_0xea18[90]](c)

&&s[_0xea18[276]](c)}for(_=0;_<6;_++)for(var x=0;x<3;x++)for(var i=1-x%2;i<3;i+=2){var t=a[_][x][i];if(t==_0xea18[360]){var o=Cube[_0xea18[361]](_,x,i)[0],r=a[o[0]][o[1]][o[2]],c=Cube

[_0xea18[362]](t,r);if(r!=_0xea18[360]){for(var n=[],b=0;b<Cube[_0xea18[363]][_0xea18[14]];b++){var u=Cube[_0xea18[363]][b],c=Cube[_0xea18[362]](r,u);-1!=Cube[_0xea18[364]][_0xea18[90]](c)

&&-1==s[_0xea18[90]](c)&&n[_0xea18[276]](u)}1==n[_0xea18[14]]&&(a[_][x][i]=n[0])}}}return a},autocompleteCorner:function(e){for(var a=e[_0xea18[353]](),s=[],_=0;_<6;_++)for(t=0;t<3;t+=2)

for(o=0;o<3;o+=2)if((r=a[_][t][o])!=_0xea18[360]){var x=a[(c=Cube[_0xea18[361]](_,t,o))[0][0]][c[0][1]][c[0][2]],i=a[c[1][0]][c[1][1]][c[1][2]];if(x!=_0xea18[360]&&i!=_0xea18[360]){n=Cube

[_0xea18[362]](r,x,i);-1==s[_0xea18[90]](n)&&s[_0xea18[276]](n)}}for(_=0;_<6;_++)for(var t=0;t<3;t+=2)for(var o=0;o<3;o+=2){var r=a[_][t][o];if(r==_0xea18[360]){var c=Cube[_0xea18[361]]

(_,t,o),x=a[c[0][0]][c[0][1]][c[0][2]],i=a[c[1][0]][c[1][1]][c[1][2]],n=Cube[_0xea18[362]](r,x,i);if(x!=_0xea18[360]&&i!=_0xea18[360]){for(var b=[],u=0;u<Cube[_0xea18[363]][_0xea18[14]];u+

+){var k=Cube[_0xea18[363]][u],n=Cube[_0xea18[362]](x,i,k);-1!=Cube[_0xea18[365]][_0xea18[90]](n)&&-1==s[_0xea18[90]](n)&&b[_0xea18[276]](k)}1==b[_0xea18[14]]&&(a[_][t][o]=b[0])}}}return 

a},reverseArray:function(e){for(var a=Cube[_0xea18[368]](Cube[_0xea18[367]](e))[_0xea18[366]](),s=0;s<a[_0xea18[14]];s++)a[s][_0xea18[279]]=-1*a[s][_0xea18[279]];return 

a},arrayToMoveset:function(e,a){for(var s=_0xea18[28],_=0;_<e[_0xea18[14]];_++)s+=e[_][_0xea18[369]],_!=e[_0xea18[14]]-1&&(s+=a?_0xea18[360]:_0xea18[86]);return s},validateMoveset:function

(e){return!!e[_0xea18[370]](/^([ULFRBD](['2]|))( ([ULFRBD](['2]|)))*$/)},reverseMoveset:function(e){return Cube[_0xea18[367]](Cube[_0xea18[371]](Cube[_0xea18[368]]

(e)))},randomCube:function(e){var a=function(s){s[_0xea18[373]][_0xea18[372]]==_0xea18[35]&&(e(s[_0xea18[373]][_0xea18[374]]),Cube[_0xea18[377]][_0xea18[376]](_0xea18[375],a,!1))};Cube

[_0xea18[377]][_0xea18[4]](_0xea18[375],a,!1),Cube[_0xea18[377]][_0xea18[31]]({type:_0xea18[35]})},verifyCube:function(e,a){var s=function(_){_[_0xea18[373]][_0xea18[372]]==_0xea18[378]&&_

[_0xea18[373]][_0xea18[17]]==e&&(a(Math[_0xea18[379]](_[_0xea18[373]][_0xea18[374]])),Cube[_0xea18[377]][_0xea18[376]](_0xea18[375],s,!1))};Cube[_0xea18[377]][_0xea18[4]](_0xea18[375],s,!

1),Cube[_0xea18[377]][_0xea18[31]]({type:_0xea18[378],cube:e})},solveCube:function(e,a,s,_,x,i,t){if(!Cube[_0xea18[380]])throw new Error(_0xea18[381]);var o=function(s){if(s[_0xea18[373]]

[_0xea18[372]]==_0xea18[382]&&s[_0xea18[373]][_0xea18[17]]==e){if(0==s[_0xea18[373]][_0xea18[374]][_0xea18[90]](_0xea18[383])&&errorCallback)errorCallback(parseInt(s[_0xea18[373]][_0xea18

[374]][_0xea18[278]](6,7)));else{var x=s[_0xea18[373]][_0xea18[374]][_0xea18[278]](0,s[_0xea18[373]][_0xea18[374]][_0xea18[14]]-1);a(_?Cube[_0xea18[368]](x):x)}Cube[_0xea18[377]][_0xea18

[376]](_0xea18[375],o,!1)}};Cube[_0xea18[377]][_0xea18[4]](_0xea18[375],o,!1);var r={cube:e,maxDepth:x||20,maxTime:i||30,useSeparator:!!t,type:_0xea18[384]};Cube[_0xea18[377]][_0xea18[31]]

(r)},generateTables:function(e,a){var s=function(_){_[_0xea18[373]][_0xea18[372]]==_0xea18[385]&&a?a(_[_0xea18[373]][_0xea18[386]],_[_0xea18[373]][_0xea18[387]]):_[_0xea18[373]][_0xea18

[372]]==_0xea18[388]&&(e(),Cube[_0xea18[380]]=!0,Cube[_0xea18[377]][_0xea18[376]](_0xea18[375],s,!1))};Cube[_0xea18[377]][_0xea18[4]](_0xea18[375],s,!1),Cube[_0xea18[377]][_0xea18[31]]

({type:_0xea18[30]})}},Object[_0xea18[389]](Cube[_0xea18[275]][_0xea18[354]],_0xea18[369],{get:function(){var e=this[_0xea18[277]];return-1==this[_0xea18[279]]?e+=_0xea18[252]:2==this

[_0xea18[275]]&&(e+=_0xea18[254]),e},set:function(e){var a=e[_0xea18[278]](0,1),s=e[_0xea18[278]](1,2),_=0;s==_0xea18[28]?(s=1,_=1):s==_0xea18[252]?(s=1,_=-1):s==_0xea18[254]&&

(s=2,_=0),this[_0xea18[277]]=a,this[_0xea18[275]]=s,this[_0xea18[279]]=_}}),Object[_0xea18[389]](Cube[_0xea18[275]][_0xea18[354]],_0xea18[390],{value:function(){return this[_0xea18

[369]]}})}();var cc,generateColorsString=function(){return _0xea18[391]},maxtime=30,maxmoves=20,worker=new Worker(_0xea18[274]),totalTime=0,facelets=[_0xea18[280],_0xea18[55],_0xea18

[281],_0xea18[282],_0xea18[283],_0xea18[284],_0xea18[285],_0xea18[286],_0xea18[287],_0xea18[288],_0xea18[58],_0xea18[289],_0xea18[290],_0xea18[291],_0xea18[292],_0xea18[293],_0xea18

[294],_0xea18[295],_0xea18[296],_0xea18[57],_0xea18[297],_0xea18[298],_0xea18[299],_0xea18[300],_0xea18[301],_0xea18[302],_0xea18[303],_0xea18[304],_0xea18[60],_0xea18[305],_0xea18

[306],_0xea18[307],_0xea18[308],_0xea18[309],_0xea18[310],_0xea18[311],_0xea18[312],_0xea18[56],_0xea18[313],_0xea18[314],_0xea18[315],_0xea18[316],_0xea18[317],_0xea18[318],_0xea18

[319],_0xea18[320],_0xea18[59],_0xea18[321],_0xea18[322],_0xea18[323],_0xea18[324],_0xea18[325],_0xea18[326],_0xea18[327]],colors=[_0xea18[43],_0xea18[45],_0xea18[47],_0xea18[49],_0xea18

[51],_0xea18[53]],colorNames={U:_0xea18[397],R:_0xea18[398],F:_0xea18[399],L:_0xea18[400],D:_0xea18[401],B:_0xea18[402],_:_0xea18[403]},times=

{twistMove:257,flipMove:220,FRtoBR_Move:1645,URFtoDLF_Move:3189,URtoDF_Move:2904,URtoUL_Move:173,UBtoDF_Move:185,MergeURtoULandUBtoDF:2803,Slice_URFtoDLF_Parity_Prun:3022,Slice_URtoDF_Parit

y_Prun:2828,Slice_Twist_Prun:2714,Slice_Flip_Prun:2544};worker[_0xea18[4]](_0xea18[375],function(e){if(e[_0xea18[373]][_0xea18[372]]==_0xea18[375])warning(_0xea18[86],e[_0xea18[373]]

[_0xea18[404]]);else if(e[_0xea18[373]][_0xea18[372]]==_0xea18[388]){document[_0xea18[63]](_0xea18[406])[_0xea18[405]]=_0xea18[407]+totalTime+_0xea18[408],document[_0xea18[63]](_0xea18

[384])[_0xea18[409]]=!1,worker[_0xea18[31]]({type:_0xea18[384],cube:document[_0xea18[63]](_0xea18[17])[_0xea18

[410]],maxDepth:megprobalKirakniEnnyiLepesben,maxTime:30}),megprobalKirakniEnnyiLepesben=24;var a=e[_0xea18[373]][_0xea18[411]];for(var s in a)0==s[_0xea18[90]](_0xea18[412])&&(a[s]

=typedToArray(a[s]))}else if(e[_0xea18[373]][_0xea18[372]]==_0xea18[378])if(0==e[_0xea18[373]][_0xea18[374]]);else{switch(e[_0xea18[373]][_0xea18[374]]){case-1:x=mess[1];break;case-

2:x=mess[2];break;case-3:x=mess[3];break;case-4:x=mess[4];break;case-5:x=mess[5];break;case-6:x=mess[6];break;default:x=mess[22]}warning(mess[8],e[_0xea18[373]][_0xea18[374]]+_0xea18

[263]+x+_0xea18[413]+mess[14])}else if(e[_0xea18[373]][_0xea18[372]]==_0xea18[35])document[_0xea18[63]](_0xea18[17])[_0xea18[410]]=e[_0xea18[373]][_0xea18[374]],setInput[_0xea18[414]]

(document[_0xea18[63]](_0xea18[17]));else if(e[_0xea18[373]][_0xea18[372]]==_0xea18[385]){var _=document[_0xea18[416]](_0xea18[415]);totalTime+=e[_0xea18[373]][_0xea18[387]],_[_0xea18[61]]

=e[_0xea18[373]][_0xea18[386]]+_0xea18[417]+e[_0xea18[373]][_0xea18[387]]+_0xea18[408],document[_0xea18[63]](_0xea18[419])[_0xea18[418]](_),document[_0xea18[63]](_0xea18[406])[_0xea18

[410]]+=times[e[_0xea18[373]][_0xea18[386]]]}else if(e[_0xea18[373]][_0xea18[372]]==_0xea18[382])if(0==e[_0xea18[373]][_0xea18[374]][_0xea18[90]](_0xea18[383])){var x,i=parseInt(e[_0xea18

[373]][_0xea18[374]][_0xea18[278]](6,7));switch(i){case 1:x=mess[1];break;case 2:x=mess[2];break;case 3:x=mess[3];break;case 4:x=mess[4];break;case 5:x=mess[5];break;case 6:x=mess

[6];break;case 7:x=_0xea18[420]+maxmoves+_0xea18[421];break;case 8:x=_0xea18[422]+maxtime+_0xea18[423];break;default:x=mess[22]}i<7&&(warning(mess[8],x+_0xea18[413]+mess[14]),updateCube

()),i>6&&(70!=megprobalKirakniEnnyiLepesben?(worker[_0xea18[31]]({type:_0xea18[384],cube:document[_0xea18[63]](_0xea18[17])[_0xea18

[410]],maxDepth:megprobalKirakniEnnyiLepesben,maxTime:60}),megprobalKirakniEnnyiLepesben=70):warning(_0xea18[424],_0xea18[425]))}else buildOutput(Cube[_0xea18[368]](e[_0xea18[373]][_0xea18

[374]])),pushState()},!1),worker[_0xea18[4]](_0xea18[426],function(e){warning(_0xea18[383],e),e[_0xea18[140]]()},!1);var currentColor=_0xea18[47];window[_0xea18[4]](_0xea18[439],popState,!

1);var isRandom=!1;document[_0xea18[4]](_0xea18[474],function(){document[_0xea18[63]](_0xea18[477])[_0xea18[4]](_0xea18[145],function(){worker[_0xea18[31]]({type:_0xea18[30]}),document

[_0xea18[63]](_0xea18[385])[_0xea18[475]]=!1,document[_0xea18[63]](_0xea18[476])[_0xea18[475]]=!0},!1),document[_0xea18[63]](_0xea18[478])[_0xea18[4]](_0xea18[145],function(){worker

[_0xea18[31]]({type:_0xea18[35]}),isRandom=!0,pushState()},!1),document[_0xea18[63]](_0xea18[480])[_0xea18[4]](_0xea18[469],function(){maxmoves=this[_0xea18[479]]},!1),document[_0xea18

[63]](_0xea18[481])[_0xea18[4]](_0xea18[469],function(){maxtime=this[_0xea18[479]]},!1),document[_0xea18[63]](_0xea18[378])[_0xea18[4]](_0xea18[145],function(){worker[_0xea18[31]]

({type:_0xea18[378],cube:document[_0xea18[63]](_0xea18[17])[_0xea18[410]]})},!1),document[_0xea18[63]](_0xea18[384])[_0xea18[4]](_0xea18[145],function(){worker[_0xea18[31]]({type:_0xea18

[384],cube:document[_0xea18[63]](_0xea18[17])[_0xea18[410]],maxDepth:maxmoves,maxTime:maxtime})},!1);for(var e=document[_0xea18[483]](_0xea18[482]),a=0;a<e[_0xea18[14]];a++)e[a][_0xea18

[4]](_0xea18[158],setColors,!1);document[_0xea18[63]](_0xea18[17])[_0xea18[4]](_0xea18[469],setInput,!1),document[_0xea18[63]](_0xea18[437])[_0xea18[4]](_0xea18[145],clearFacelets,!

1),document[_0xea18[63]](_0xea18[436])[_0xea18[4]](_0xea18[145],cleanCube,!1);for(var s=document[_0xea18[63]](_0xea18[484]),a=0;a<colors[_0xea18[14]];a++)(_=document[_0xea18[416]](_0xea18

[485]))[_0xea18[429]]=_0xea18[486],_[_0xea18[487]]=colors[a],s[_0xea18[418]](_);for(a=0;a<facelets[_0xea18[14]];a++){var _=document[_0xea18[416]](_0xea18[485]);facelets[a][_0xea18[278]]

(1,2)==_0xea18[488]?_[_0xea18[429]]=_0xea18[489]:(parseInt(facelets[a][_0xea18[278]](1,2))-1)%3==0&&facelets[a][_0xea18[278]](1,2)!=_0xea18[490]?_[_0xea18[429]]=_0xea18[491]:_[_0xea18

[429]]=_0xea18[492],_[_0xea18[487]]=facelets[a],_[_0xea18[161]]=facelets[a][_0xea18[278]](0,1),_[_0xea18[444]][_0xea18[443]]=colorNames[_[_0xea18[161]]],_[_0xea18[4]](_0xea18

[145],setColor,!1),document[_0xea18[63]](facelets[a][_0xea18[278]](0,1))[_0xea18[418]](_)}if(document[_0xea18[63]](_0xea18[450])[_0xea18[4]](_0xea18[145],setColorBlank,!1),window[_0xea18

[139]][_0xea18[493]]!=_0xea18[28])popState(x={state:getQueryString(window[_0xea18[139]][_0xea18[493]][_0xea18[278]](1))});else{var x={state:{cube:_0xea18[437]}};popState(x)}document

[_0xea18[63]](_0xea18[450])[_0xea18[444]][_0xea18[443]]=colorNames[currentColor]},!1);var mouseX=0,mouseY=0,poppedUp=0,eltelt5mp=0;document[_0xea18[4]](_0xea18[494],function(e){mouseX=e

[_0xea18[495]],mouseY=e[_0xea18[496]]}),jQuery(document)[_0xea18[174]](function(){$(_0xea18[497])[_0xea18[14]]>0&&mouseY<100&&0==poppedUp&&1==eltelt5mp&&(jQuery(_0xea18[497])[_0xea18[135]]

(200),jQuery(_0xea18[498])[_0xea18[135]](200),document[_0xea18[63]](_0xea18[499])[_0xea18[61]]=_0xea18[500],document[_0xea18[63]](_0xea18[501])[_0xea18[61]]=document[_0xea18[63]](_0xea18

[502])[_0xea18[61]],poppedUp++)}),$(document)[_0xea18[218]](function(){setTimeout(function(){eltelt5mp=1},5e3),$(_0xea18[503])[_0xea18[145]](function(e){$(_0xea18[497])[_0xea18[76]](),

$(_0xea18[498])[_0xea18[76]](200)})});