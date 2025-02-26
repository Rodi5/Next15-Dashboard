interface Task {
    task: string
    date: string
}

interface WidgetTaskProps {
    tasks: Task[],
    color: string,
}

const WidgetTask = ({ tasks, color }: WidgetTaskProps) => {
    return (
        <div className='rounded-sm bg-white'>
            <table className="w-full">
                <thead>
                    <tr className="border-b bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle text-sm font-bold">Task</th>
                        <th className="h-12 px-4 text-left align-middle text-sm font-bold">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index} className="border-b">
                            <td className="px-4 py-2" >
                                <a className='text-sm' style={{color:color}}>
                                {task.task}
                                </a>
                            </td>
                            <td className="px-4 py-2 text-sm text-muted-foreground">{task.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default WidgetTask;