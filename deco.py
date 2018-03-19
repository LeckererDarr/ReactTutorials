from datetime import datetime
evt_r = [1000,1000] # event record
t_r = {'start':0, 'end':0} # time record
flag = {'proc':True}

def datetime_decorator(func):
    def onBtnPress():
        t_r['start'] = datetime.now()

    def onBtnUp():
        t_r['end'] = datetime.now()

    def checkTime():
        last = int((t_r['end']-t_r['start']).microseconds/1000)
        evt_r.pop(0)
        evt_r.append(last)

        if len(list(filter(lambda x:x<300,evt_r))):
            flag['stop']=False


    def decorated(*args, **kwargs):
        onBtnPress()
        func(*args, **kwargs)
        onBtnUp()
        checkTime()

    return decorated

@datetime_decorator
def main_function_1(st):
    import time
    print(st)
    time.sleep(0.1)

main_function_1('안녕')
main_function_1('안녕')
print(evt_r)
print(flag)