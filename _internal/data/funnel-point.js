import FunnelPyramidBasePoint from'./funnelpyramidbase-point';import{BLANK,preDefStr}from'../lib/lib';var UNDEF,POINTER='pointer',POSITION_START=preDefStr.POSITION_START,POSITION_END=preDefStr.POSITION_END,POSITION_MIDDLE=preDefStr.POSITION_MIDDLE,textHAlign={right:POSITION_END,left:POSITION_START,middle:POSITION_MIDDLE,start:POSITION_START,end:POSITION_END,center:POSITION_MIDDLE,undefined:BLANK,BLANK:BLANK},ROLLOVER='DataPlotRollOver',ROLLOUT='DataPlotRollOut';class FunnelPoint extends FunnelPyramidBasePoint{configure(a={}){for(var b in a)this[b]=a[b];this.upperRadiusFactor=1}getType(){return'data'}getName(){return'funnelpoint'}getModifiedCurrentValue(){return UNDEF}getRatioK(a,b,c,d,e){var f=this,g=a.config,h=!g.streamLinedData,i=g.useSameSlantAngle;return h?.2+c*d:f.y?i?f.y/e:Math.sqrt(f.y/e):1}getLowestRadiusFactor(a,b){var c=this,d=a.config,e=!d.streamLinedData,f=d.useSameSlantAngle;return e?.2:c.y?f?c.y/b:Math.sqrt(c.y/b):1}allocatePosition(){}drawPlots(){var a,b,c,d,e,f,g,h=this,i=h.index,j=h.getLinkedParent(),k=j.getFromEnv('toolTipController'),l=j.config,m=h.y,n=h.displayValue,o=l.isSliced,p=h.labelAline,q=h.appliedStyle,r=h.style,s=j.getFromEnv('chart'),t=s.getChildContainer('trackerGroup'),u=h.plot,v=!!h.link,w=l.distanceAvailed,x=j.config.labelDrawingConfig,y=j.getFromEnv('animationManager'),z=h.setRolloutAttr,A=h.setRolloverAttr,B=h.rolloverProperties,C={};return(a=o?1:h.isSliced,e=q&&q.color||r&&r.color||j._chartLevelAttr.color,g={text:n,direction:BLANK,cursor:v?POINTER:BLANK,x:0,y:0,fill:e,"text-anchor":textHAlign[p]},null===m||m===UNDEF||!h.shapeArgs)?void(x[i]=f={args:g,css:q,point:h}):(c=h.getGraphicalElement('graphic'),d=h.getGraphicalElement('trackerObj'),z||(h.setRolloutAttr=z={}),A||(h.setRolloverAttr=A={}),h.hoverEffects?(z.color=h.rawColor,z.opacity=h.rawAlpha,z['stroke-width']=h.borderWidth,z.stroke=h.borderColor,A.color=B.color,A.opacity=B.alpha,A['stroke-width']=B.borderWidth,A.stroke=B.borderColor):(z=h.setRolloutAttr={},A=h.setRolloverAttr={}),u?(h.shapeArgs.graphics=c,c=j.pyramidFunnelShape(h.shapeArgs),h.addGraphicalElement('graphic',c),c=y.setAnimation({el:c,attr:{fill:h.color,"stroke-width":h.borderWidth,stroke:h.borderColor},component:j}),h.addGraphicalElement('graphic',c),c.show(),x[i]=f={args:g,css:q,point:h}):(h.shapeArgs.graphics=u,h.plot=u={},c=j.pyramidFunnelShape(h.shapeArgs).attr({fill:h.color,"stroke-width":h.borderWidth,stroke:h.borderColor}),d=y.setAnimation({el:'path',container:t,component:j}).click(j.plotMouseUp,C).hover(function(a){var b=this;c.attr(h.setRolloverAttr),s.plotEventHandler(b,a,ROLLOVER)},function(a){var b=this;c.attr(h.setRolloutAttr),s.plotEventHandler(b,a,ROLLOUT)}),h.addGraphicalElement('graphic',c),h.addGraphicalElement('trackerObj',d),x[i]=f={args:g,css:q,point:h}),l.showTooltip?k.enableToolTip(d,h.toolText):k.disableToolTip(d),u.value=m,u.displayValue=n,u.sliced=!!a,u.cursor=v?POINTER:BLANK,u.x=h.x,u.index=i,C.datasetStore=j,C.plotItem=u,d.unclick(j.slice),h.doNotSlice||d.click(j.slice,C),f.context=C,f.actions={click:j.slice,hover:[function(a){var b=this;c.attr(h.setRolloverAttr),s.plotEventHandler(b,a,ROLLOVER)},function(a){var b=this;c.attr(h.setRolloutAttr),s.plotEventHandler(b,a,ROLLOUT)}]},u.dy=0,l.noOfGap?(w&&(u._startTranslateY=b='t0,'+w,u.dy=u.distanceAvailed=w),l.slicingGapPosition[h.x]&&(l.distanceAvailed-=l.perGapDistance)):u._startTranslateY=b='t0,0',y.setAnimation({el:c,attr:{transform:b},component:j}),f.transform=b,u)}}export default FunnelPoint;